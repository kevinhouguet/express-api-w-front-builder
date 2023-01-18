// https://jestjs.io/fr/docs/getting-started

const demoService = require('../demo');

const demo = demoService.sayHello();

describe('demoService.sayHello method', () => {
  it('should return a string', () => {
    expect(typeof demo).toBe('string');
  });
});
