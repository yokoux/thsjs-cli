const { program } = require('commander')
const { resolve } = require('path')
const WebpackCLI = require('webpack-cli/lib/webpack-cli')

const runCLI = new WebpackCLI()

const cwd = process.cwd()
program
  .option('-c, --config <filename>')
  .option('-m, --mode <development|production>')
program.parse(process.argv)

const options = program.opts()

const command = process.argv[2]
const args = process.argv.slice(0, 2)

switch (command) {
  case 'serve':
    args.push('serve')
    break
  default:
    args.push('build')
    break
}

if (options.config) {
  if (options.mode == 'production') {
    args.push('--config')
    args.push(resolve(__dirname, 'webpack.prod.js'))
  } else {
    args.push('--config')
    args.push(resolve(__dirname, 'webpack.dev.js'))
  }

  args.push('--config')
  args.push(resolve(cwd, options.config))

  args.push('--merge')
} else {
  if (options.mode == 'production') {
    args.push('--config')
    args.push(resolve(__dirname, 'webpack.prod.js'))
  } else {
    args.push('--config')
    args.push(resolve(__dirname, 'webpack.dev.js'))
  }
}

switch (options.mode) {
  case 'production':
    args.push('--mode')
    args.push('production')
    break
  case 'development':
    args.push('--mode')
    args.push('development')
    break
  default:
    if (command == 'release') {
      args.push('--mode')
      args.push('production')
    } else {
      args.push('--mode')
      args.push('development')
    }
    break
}

console.log(`cmd: ${args.join(" ")}`)

try {
  runCLI.run(args)
} catch (error) {
  runCLI.logger.error(error)
  process.exit(2)
}
