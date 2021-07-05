import { Command, flags } from '@oclif/command';
import { InitApp } from '@mate/core/lib/cli';
import * as Accounts from '@mate/core/lib/accounts';

export default class Create extends Command {
  static description = 'create an account'

  static flags = {
    help: flags.help({ char: 'h' }),
    // provider: flag with a value (-n, --provider=VALUE)
    provider: flags.string({
      char: 'p',
      description: 'App provider',
      options: ['Mate', 'Exchange'],
      default: 'Mate'
    }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'name' }]

  async run() {
    const { args, flags } = this.parse(Create)
    if (args.name) {
      const app = await InitApp<Accounts.AccountApp>(Accounts.AccountApp);
      let account = new Accounts.ExchangeAccount(args.name);
      account = await app.addAccount(account);
      console.log(`"${account.name}"@${account.provider} created!`);
      app.close();
      this.exit(0);
    }
  }
}
