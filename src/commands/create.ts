import { Command, flags } from '@oclif/command';
import { InitApp } from '@mate/core/lib/cli';
import { Accounts } from '@mate/core/lib';

export default class Create extends Command {
  static description = 'create an account'

  static flags = {
    help: flags.help({ char: 'h' }),
    // provider: flag with a value (-n, --provider=VALUE)
    provider: flags.string({
      char: 'p',
      description: 'App provider',
      options: Accounts.App.BINDERS,
      default: 'Mate'
    }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' })
  }

  static args = [{ name: 'name' }]

  async run() {
    const { args, flags } = this.parse(Create)
    if (args.name) {
      const app = await InitApp<Accounts.App>(Accounts.App);
      let account = await app.createAccount(flags.provider, args.name);
      console.log(`"${account.name}"@${account.provider} created!`);
      app.close();
    }
  }
}
