// import * as Accounts from '@mate/core/lib/accounts';

// const lib = jest.createMockFromModule('@mate/core/lib/accounts').

// Accounts.AccountApp.prototype['readAccounts'] = jest.fn(() => {
//   return [{ provider: 'Exchange', name: 'Office Mail' }, { provider: 'Google', name: 'Personal Mail' }];
// })

const ACCOUNTS = [{ provider: 'Exchange', name: 'Office Mail', username: 'corp\acme' },
{ provider: 'Google', name: 'Personal Mail', username: 'emadridm@gmail.com' }];

class AccountApp {

  async readAccounts() {
    return ACCOUNTS;
  }

  close() {
    console.log('I am the AccountApp mocked!')
  }
}


export { AccountApp };
