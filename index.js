#!/usr/bin/env node

const nanoid = require('nanoid');
const clipboardy = require('clipboardy');
const mri = require('mri');

const help = () =>
  console.log(
    `
  Usage: pwgen [options]

  Options:

    -h, --help      output usage information
    -V, --version   output the version number
    -l, --length    length of password (32)
  `
  );

const main = argv_ => {
  const argv = mri(argv_, {
    alias: {
      l: 'length',
      h: 'help',
      v: 'version'
    },
    default: {
      length: 32
    },
    boolean: ['help', 'version']
  });

  // print version
  if (argv.version) {
    console.log(require('./package').version);
    return 0;
  }

  // show help
  if (argv.help) {
    help();
    return 0;
  }

  // show warning for passwords < 10
  if (argv.length < 10) {
    console.log(
      '⚠️  Passwords with less than ten characters are not secure. (https://goo.gl/SzkLui)'
    );
    return 0;
  }

  // generate password and copy to clipboard
  const pass = nanoid(argv.length);
  clipboardy.writeSync(pass);
  console.log('📋  copied to clipboard');

  process.exit();
};

main(process.argv);
