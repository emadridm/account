import { stdout } from 'stdout-stderr';
import List from '../../src/commands/list';

describe('list', () => {

  beforeAll(() => {
    stdout.start();
  })

  afterAll(() => {
    stdout.stop();
  })

  it('should list all accounts', async () => {
    return List.run().then(() => {
      expect(stdout.output).toContain('Office Mail');
      expect(stdout.output).toContain('Exchange');
    })
  })

})
