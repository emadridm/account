import Create from '../../src/commands/create';
import { stdout } from 'stdout-stderr';

describe('create', () => {

  beforeAll(() => {
    stdout.start();
  })

  afterAll(() => {
    stdout.stop()
  })

  // test
  //   .stdout()
  //   .command(['create', 'Office Mate'])
  //   .it('should create a Mate Cloud account named "Office Mate"', ctx => {
  //     expect(ctx.stdout).to.contain('"Office Mate"@Mate created!!')
  //   })

  it('should create a Microsoft Exchange named "Office Mail"', async () => {
    return Create.run(['--provider', 'Exchange', 'Office Mail']).then(() => {
      expect(stdout.output).toContain('"Office Mail"@Exchange created!');
    })
  })

})
