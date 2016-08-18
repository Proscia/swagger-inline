const assert = require('chai').assert;

const Options = require('../src/options');

describe('Options', () => {
    it('has defaults', () => {
        const options = new Options();

        assert.equal(options.getFormat(), '.json');
        assert.isTrue(options.isJSON());
    });

    it('copies the base format', () => {
        const options = new Options({ base: 'someFile.yaml' });

        assert.equal(options.getFormat(), '.yaml');
        assert.equal(options.getBase(), 'someFile.yaml');
    });
});