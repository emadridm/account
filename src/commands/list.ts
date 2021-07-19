import { Command, flags } from '@oclif/command'
import { InitApp } from '@mate/core/lib/cli';
import { AccountApp } from '@mate/core/lib/accounts';

export default class List extends Command {
  static description = 'list accounts'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    // const parse = this.parse(List);
    let table: any[] = [];
    const app = await InitApp<AccountApp>(AccountApp);
    const accounts = await app.readAccounts();
    accounts.forEach((account) => {
      table.push({ id: account._id?.toHexString(), provider: account.provider, name: account.name });
    })
    console.table(table);
    app.close();
  }
}
