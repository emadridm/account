// import * as Accounts from '@mate/core/lib/accounts';

// const lib = jest.createMockFromModule('@mate/core/lib/accounts').

// Accounts.AccountApp.prototype['readAccounts'] = jest.fn(() => {
//   return [{ provider: 'Exchange', name: 'Office Mail' }, { provider: 'Google', name: 'Personal Mail' }];
// })

class AccountApp {

  async readAccounts() {
    return [{ provider: 'Exchange', name: 'Office Mail' }, { provider: 'Google', name: 'Personal Mail' }];
  }

  close() {
    console.log('I am the AccountApp mocked!')
  }
}


export { AccountApp };
