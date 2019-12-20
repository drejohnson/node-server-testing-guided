const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');

describe('hobbits model', function() {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });
  describe('insert()', function() {
    it('should add hobbit to db', async function() {
      await Hobbits.insert({ name: 'Sam' });
      await Hobbits.insert({ name: 'Gaffer' });

      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(2);
    });
  });
});
