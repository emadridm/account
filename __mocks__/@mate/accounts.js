'use strict';

const Accounts = require('@mate/core/lib/accounts');

// Accounts.AccountApp.prototype['readAccounts'] = jest.fn(() => {
//   return [{provider: 'jajaja'}];
// });

class AccountApp extends Accounts.AccountApp {
  async readAccounts() {
    return [{provider: 'jajaja'}];
  }
}


module.exports = {AccountApp};
