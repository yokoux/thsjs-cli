"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const minimist_1 = __importDefault(require("minimist"));
const prompts_1 = __importDefault(require("prompts"));
const kolorist_1 = require("kolorist");
const argv = (0, minimist_1.default)(process.argv.slice(2), { string: ["_"] });
const cwd = process.cwd();
const FRAMEWORKS = [
    {
        name: "react",
        color: kolorist_1.cyan,
        variants: [
            {
                name: "react",
                display: "JavaScript",
                color: kolorist_1.yellow,
            },
            {
                name: "react-ts",
                display: "TypeScript",
                color: kolorist_1.blue,
            },
        ],
    },
];
const TEMPLATES = FRAMEWORKS.map((f) => (f.variants && f.variants.map((v) => v.name)) || [f.name]).reduce((a, b) => a.concat(b), []);
const renameFiles = {
    _gitignore: ".gitignore",
};
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        let targetDir = argv._[0];
        let template = argv.template || argv.t;
        const defaultProjectName = !targetDir ? "thsjs-project" : targetDir;
        let result = {};
        try {
            result = yield (0, prompts_1.default)([
                {
                    type: targetDir ? null : "text",
                    name: "projectName",
                    message: (0, kolorist_1.reset)("Project name:"),
                    initial: defaultProjectName,
                    onState: (state) => (targetDir = state.value.trim() || defaultProjectName),
                },
                {
                    type: () => !(0, fs_1.existsSync)(targetDir) || isEmpty(targetDir) ? null : "confirm",
                    name: "overwrite",
                    message: () => (targetDir === "."
                        ? "Current directory"
                        : `Target directory "${targetDir}"`) +
                        ` is not empty. Remove existing files and continue?`,
                },
                {
                    // @ts-ignore
                    type: (_, { overwrite } = {}) => {
                        if (overwrite === false) {
                            throw new Error((0, kolorist_1.red)("✖") + " Operation cancelled");
                        }
                        return null;
                    },
                    name: "overwriteChecker",
                },
                {
                    type: () => (isValidPackageName(targetDir) ? null : "text"),
                    name: "packageName",
                    message: (0, kolorist_1.reset)("Package name:"),
                    initial: () => toValidPackageName(targetDir),
                    validate: (dir) => isValidPackageName(dir) || "Invalid package.json name",
                },
                {
                    type: template && TEMPLATES.includes(template) ? null : "select",
                    name: "framework",
                    message: typeof template === "string" && !TEMPLATES.includes(template)
                        ? (0, kolorist_1.reset)(`"${template}" isn't a valid template. Please choose from below: `)
                        : (0, kolorist_1.reset)("Select a framework:"),
                    initial: 0,
                    choices: FRAMEWORKS.map((framework) => {
                        const frameworkColor = framework.color;
                        return {
                            title: frameworkColor(framework.name),
                            value: framework,
                        };
                    }),
                },
                {
                    type: (framework) => framework && framework.variants ? "select" : null,
                    name: "variant",
                    message: (0, kolorist_1.reset)("Select a variant:"),
                    // @ts-ignore
                    choices: (framework) => framework.variants.map((variant) => {
                        const variantColor = variant.color;
                        return {
                            title: variantColor(variant.name),
                            value: variant.name,
                        };
                    }),
                },
            ], {
                onCancel: () => {
                    throw new Error((0, kolorist_1.red)("✖") + " Operation cancelled");
                },
            });
        }
        catch (cancelled) {
            console.log(cancelled.message);
            return;
        }
        // user choice associated with prompts
        const { framework, overwrite, packageName, variant } = result;
        const root = (0, path_1.join)(cwd, targetDir);
        if (overwrite) {
            emptyDir(root);
        }
        else if (!(0, fs_1.existsSync)(root)) {
            (0, fs_1.mkdirSync)(root);
        }
        // determine template
        template = variant || framework || template;
        console.log(`\nScaffolding project in ${root}...`);
        const templateDir = (0, path_1.join)(__dirname, `../template-${template}`);
        const write = (file, content) => {
            const targetPath = renameFiles[file]
                ? (0, path_1.join)(root, renameFiles[file])
                : (0, path_1.join)(root, file);
            if (content) {
                (0, fs_1.writeFileSync)(targetPath, content);
            }
            else {
                copy((0, path_1.join)(templateDir, file), targetPath);
            }
        };
        const files = (0, fs_1.readdirSync)(templateDir);
        for (const file of files.filter((f) => f !== "package.json")) {
            write(file);
        }
        const pkg = require((0, path_1.join)(templateDir, `package.json`));
        pkg.name = packageName || targetDir;
        write("package.json", JSON.stringify(pkg, null, 2));
        const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
        const pkgManager = pkgInfo ? pkgInfo.name : "npm";
        console.log(`\nDone. Now run:\n`);
        if (root !== cwd) {
            console.log(`  cd ${(0, path_1.relative)(cwd, root)}`);
        }
        switch (pkgManager) {
            case "yarn":
                console.log("  yarn");
                console.log("  yarn dev");
                break;
            default:
                console.log(`  ${pkgManager} install`);
                console.log(`  ${pkgManager} run dev`);
                break;
        }
        console.log();
    });
}
function copy(src, dest) {
    const stat = (0, fs_1.statSync)(src);
    if (stat.isDirectory()) {
        copyDir(src, dest);
    }
    else {
        (0, fs_1.copyFileSync)(src, dest);
    }
}
function isValidPackageName(projectName) {
    return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName);
}
function toValidPackageName(projectName) {
    return projectName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/^[._]/, "")
        .replace(/[^a-z0-9-~]+/g, "-");
}
function copyDir(srcDir, destDir) {
    (0, fs_1.mkdirSync)(destDir, { recursive: true });
    for (const file of (0, fs_1.readdirSync)(srcDir)) {
        const srcFile = (0, path_1.resolve)(srcDir, file);
        const destFile = (0, path_1.resolve)(destDir, file);
        copy(srcFile, destFile);
    }
}
function isEmpty(path) {
    const files = (0, fs_1.readdirSync)(path);
    return files.length === 0 || (files.length === 1 && files[0] === ".git");
}
function emptyDir(dir) {
    if (!(0, fs_1.existsSync)(dir)) {
        return;
    }
    for (const file of (0, fs_1.readdirSync)(dir)) {
        const abs = (0, path_1.resolve)(dir, file);
        // baseline is Node 12 so can't use rmSync :(
        if ((0, fs_1.lstatSync)(abs).isDirectory()) {
            emptyDir(abs);
            (0, fs_1.rmdirSync)(abs);
        }
        else {
            (0, fs_1.unlinkSync)(abs);
        }
    }
}
/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
function pkgFromUserAgent(userAgent) {
    if (!userAgent)
        return undefined;
    const pkgSpec = userAgent.split(" ")[0];
    const pkgSpecArr = pkgSpec.split("/");
    return {
        name: pkgSpecArr[0],
        version: pkgSpecArr[1],
    };
}
init().catch((e) => {
    console.error(e);
});
