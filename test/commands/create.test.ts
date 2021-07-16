import Create from '../../src/commands/create';
import { stdout } from 'stdout-stderr';

describe('create', () => {

  beforeAll(() => {
    stdout.start();
  })

  afterAll(() => {
    stdout.stop()
  })

  // it('should create a Mate Cloud account named "Office Mate"', async () => {
  //   return Create.run(['Office Mail']).then(() => {
  //     expect(stdout.output).toContain('"Office Mate"@Mate created!!');
  //   })
  // })

  it('should create a Microsoft Exchange account named "Office Mail"', async () => {
    return Create.run(['--provider', 'Exchange', 'Office Mail']).then(() => {
      expect(stdout.output).toContain('"Office Mail"@Exchange created!');
    })
  })

})
