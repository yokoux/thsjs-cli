import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  PathLike,
  readdirSync,
  rmdirSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from "fs";
import { join, relative, resolve } from "path";
import minimist from "minimist";
import prompts from "prompts";
import { yellow, cyan, blue, red, reset } from "kolorist";

const argv = minimist(process.argv.slice(2), { string: ["_"] });
const cwd = process.cwd();

const FRAMEWORKS = [
  {
    name: "react",
    color: cyan,
    variants: [
      {
        name: "react",
        display: "JavaScript",
        color: yellow,
      },
      {
        name: "react-ts",
        display: "TypeScript",
        color: blue,
      },
    ],
  },
];

const TEMPLATES = FRAMEWORKS.map(
  (f) => (f.variants && f.variants.map((v) => v.name)) || [f.name]
).reduce((a, b) => a.concat(b), []);

const renameFiles: { [key: string]: string } = {
  _gitignore: ".gitignore",
  _babelrc: ".babelrc",
  "_eslintrc.js": ".eslintrc.js",
  "_eslintignore": ".eslintignore",
  "_prettierignore": ".prettierignore",
  "_prettierrc.js": ".prettierrc.js"
};

async function init() {
  let targetDir = argv._[0];
  let template = argv.template || argv.t;

  const defaultProjectName = !targetDir ? "thsjs-project" : targetDir;

  let result: prompts.Answers<string> = {};

  try {
    result = await prompts(
      [
        {
          type: targetDir ? null : "text",
          name: "projectName",
          message: reset("Project name:"),
          initial: defaultProjectName,
          onState: (state) =>
            (targetDir = state.value.trim() || defaultProjectName),
        },
        {
          type: () =>
            !existsSync(targetDir) || isEmpty(targetDir) ? null : "confirm",
          name: "overwrite",
          message: () =>
            (targetDir === "."
              ? "Current directory"
              : `Target directory "${targetDir}"`) +
            ` is not empty. Remove existing files and continue?`,
        },
        {
          // @ts-ignore
          type: (_, { overwrite } = {}) => {
            if (overwrite === false) {
              throw new Error(red("✖") + " Operation cancelled");
            }
            return null;
          },
          name: "overwriteChecker",
        },
        {
          type: () => (isValidPackageName(targetDir) ? null : "text"),
          name: "packageName",
          message: reset("Package name:"),
          initial: () => toValidPackageName(targetDir),
          validate: (dir) =>
            isValidPackageName(dir) || "Invalid package.json name",
        },
        {
          type: template && TEMPLATES.includes(template) ? null : "select",
          name: "framework",
          message:
            typeof template === "string" && !TEMPLATES.includes(template)
              ? reset(
                  `"${template}" isn't a valid template. Please choose from below: `
                )
              : reset("Select a framework:"),
          initial: 0,
          choices: FRAMEWORKS.map((framework) => {
            const frameworkColor = framework.color;
            return {
              title: frameworkColor(framework.name),
              value: framework,
            };
          }),
        },
        // {
        //   type: (framework) =>
        //     framework && framework.variants ? "select" : null,
        //   name: "variant",
        //   message: reset("Select a variant:"),
        //   // @ts-ignore
        //   choices: (framework) =>
        //     framework.variants.map((variant: any) => {
        //       const variantColor = variant.color;
        //       return {
        //         title: variantColor(variant.name),
        //         value: variant.name,
        //       };
        //     }),
        // },
      ],
      {
        onCancel: () => {
          throw new Error(red("✖") + " Operation cancelled");
        },
      }
    );
  } catch (cancelled) {
    console.log((cancelled as Error).message);
    return;
  }

  // user choice associated with prompts
  const { framework, overwrite, packageName } = result;

  const root = join(cwd, targetDir);

  if (overwrite) {
    emptyDir(root);
  } else if (!existsSync(root)) {
    mkdirSync(root);
  }

  // determine template
  template =  framework.name || template;

  console.log(`\nScaffolding project in ${root}...`);

  const templateDir = join(__dirname, `../template-${template}-ts`);

  const write = (file: string, content?: string) => {
    const targetPath = renameFiles[file]
      ? join(root, renameFiles[file])
      : join(root, file);
    if (content) {
      writeFileSync(targetPath, content);
    } else {
      copy(join(templateDir, file), targetPath);
    }
  };

  const files = readdirSync(templateDir);
  for (const file of files.filter((f) => f !== "package.json")) {
    write(file);
  }

  const pkg = require(join(templateDir, `package.json`));

  pkg.name = packageName || targetDir;

  write("package.json", JSON.stringify(pkg, null, 2));

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
  const pkgManager = pkgInfo ? pkgInfo.name : "npm";

  console.log(`\nDone. Now run:\n`);
  if (root !== cwd) {
    console.log(`  cd ${relative(cwd, root)}`);
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
}

function copy(src: string, dest: string) {
  const stat = statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    copyFileSync(src, dest);
  }
}

function isValidPackageName(projectName: string) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName
  );
}

function toValidPackageName(projectName: string) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/^[._]/, "")
    .replace(/[^a-z0-9-~]+/g, "-");
}

function copyDir(srcDir: string, destDir: string) {
  mkdirSync(destDir, { recursive: true });
  for (const file of readdirSync(srcDir)) {
    const srcFile = resolve(srcDir, file);
    const destFile = resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

function isEmpty(path: string) {
  const files = readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === ".git");
}

function emptyDir(dir: string) {
  if (!existsSync(dir)) {
    return;
  }
  for (const file of readdirSync(dir)) {
    const abs = resolve(dir, file);
    // baseline is Node 12 so can't use rmSync :(
    if (lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      rmdirSync(abs);
    } else {
      unlinkSync(abs);
    }
  }
}

/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
function pkgFromUserAgent(userAgent?: string) {
  if (!userAgent) return undefined;
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
