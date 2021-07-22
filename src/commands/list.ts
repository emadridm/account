import { Command, flags } from '@oclif/command'
import { InitApp } from '@mate/core/lib/cli';
import { Accounts } from '@mate/core/lib';

export default class List extends Command {
  static description = 'list accounts'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    provider: flags.string({
      char: 'p',
      description: 'App provider',
      options: Accounts.AccountApp.SLABELS
    }),

  }

  static args = [{ name: 'name' }]

  async run() {
    const parse = this.parse(List);
    let table: object[] = [];
    const app = await InitApp<Accounts.AccountApp>(Accounts.AccountApp);
    const binders = parse.flags.provider ? [parse.flags.provider] : Accounts.AccountApp.SLABELS;
    for (let provider of binders) {
      const accounts = await app.readAccounts(provider);
      accounts.forEach((account) => {
        table.push({ id: account._id?.toHexString(), provider: account.provider, name: account.name });
      })
    }
    if (table.length > 0) {
      console.table(table);
    } else {
      console.log('There are not records!');
    }
    app.close();
  }
}
