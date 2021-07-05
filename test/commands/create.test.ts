import { expect, test } from '@oclif/test';

describe('create', () => {

  test
    .stdout()
    .command(['create', 'Office Mate'])
    .it('should create a Mate Cloud account named "Office Mate"', ctx => {
      expect(ctx.stdout).to.contain('"Office Mate"@Mate created!!')
    })

  test
    .stdout()
    .command(['create', '--provider', 'Exchange', 'Office Mail'])
    .it('should create a Microsoft Exchange named "Office Mail"', ctx => {
      expect(ctx.stdout).to.contain('"Office Mail"@Exchange created!')
    })

})
