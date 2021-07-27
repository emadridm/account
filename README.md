account
=======

An account manager for Mate.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/account.svg)](https://npmjs.org/package/account)
[![Downloads/week](https://img.shields.io/npm/dw/account.svg)](https://npmjs.org/package/account)
[![License](https://img.shields.io/npm/l/account.svg)](https://github.com/emadridm/account/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @mate/account
$ account COMMAND
running command...
$ account (-v|--version|version)
@mate/account/1.0.0 linux-x64 node-v16.1.0
$ account --help [COMMAND]
USAGE
  $ account COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`account create [NAME]`](#account-create-name)
* [`account hello [FILE]`](#account-hello-file)
* [`account help [COMMAND]`](#account-help-command)
* [`account list [NAME]`](#account-list-name)
* [`account sign-in [FILE]`](#account-sign-in-file)

## `account create [NAME]`

create an account

```
USAGE
  $ account create [NAME]

OPTIONS
  -f, --force
  -h, --help                           show CLI help
  -p, --provider=Mate|Exchange|Google  [default: Mate] App provider
```

_See code: [src/commands/create.ts](https://github.com/emadridm/account/blob/v1.0.0/src/commands/create.ts)_

## `account hello [FILE]`

describe the command here

```
USAGE
  $ account hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ account hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/emadridm/account/blob/v1.0.0/src/commands/hello.ts)_

## `account help [COMMAND]`

display help for account

```
USAGE
  $ account help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `account list [NAME]`

list accounts

```
USAGE
  $ account list [NAME]

OPTIONS
  -h, --help                           show CLI help
  -p, --provider=Mate|Exchange|Google  App provider
```

_See code: [src/commands/list.ts](https://github.com/emadridm/account/blob/v1.0.0/src/commands/list.ts)_

## `account sign-in [FILE]`

describe the command here

```
USAGE
  $ account sign-in [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/sign-in.ts](https://github.com/emadridm/account/blob/v1.0.0/src/commands/sign-in.ts)_
<!-- commandsstop -->
