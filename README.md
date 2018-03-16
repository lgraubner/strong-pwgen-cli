# Strong password generator CLI

[![Travis](https://img.shields.io/travis/lgraubner/strong-pwgen-cli.svg)](https://travis-ci.org/lgraubner/strong-pwgen-cli) [![David](https://img.shields.io/david/lgraubner/strong-pwgen-cli.svg)](https://david-dm.org/lgraubner/strong-pwgen-cli) [![npm](https://img.shields.io/npm/v/strong-pwgen-cli.svg)](https://www.npmjs.com/package/strong-pwgen-cli)

> Generate cryptographically strong passwords.

This CLI tool generates unique and strong passwords. Under the hood the excellent nanoid package is used which leverages the Node.js crypto module. You can read more about the generation process and security on it's [nanoid's Github page](https://github.com/ai/nanoid#readme).

## Table of contents

- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [License](#license)

## Install

This module is available on [npm](https://www.npmjs.com/).

```BASH
npm install -g strong-pwgen-cli
# or execute it directly with npx (since npm v5.2)
npx strong-pwgen-cli
```

## Usage

This module provides a strong default consisting of a 32 characters long random string based on lower/uppercase alphabet, numbers and special chars. The result is getting copied directly to the clipboard.

```BASH
pwgen [options]
```

## Options

At the moment only a single option is available. Most of the time the default behavior should suffice.

### length

Adjust the length of the password.

```
pwgen --length 20
# or
pwgen -l 20
```
