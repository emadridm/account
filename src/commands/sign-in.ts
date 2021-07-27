import { Command, flags } from '@oclif/command'

export default class SignIn extends Command {
  static description = 'Sign in account'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
  }

  static args = [{ name: 'id' }]

  async run() {
    const { args, flags } = this.parse(SignIn);

  }
}
