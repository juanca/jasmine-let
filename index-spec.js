const jasmineLet = require('./index.js');

beforeEach(function () {
  this.let = jasmineLet;
})

describe('jasmine-let', () => {
  beforeEach(function () {
    i = 0;
    this.let('user', () => ({
      id: ++i,
      firstName: this.firstName
    }));
    this.let('firstName', () => 'A default value');
  })

  it('has default values', function () {
    expect(this.user.id).toBe(1);
    expect(this.user.firstName).toBe('A default value');
  });

  it('caches the expression', function () {
    expect(this.user.id).toBe(1);
    expect(this.user.id).toBe(1);
  });

  describe('overriding previous unread expressions', () => {
    beforeEach(function () {
      this.let('firstName', () => 'An overridden value')
    });

    it('works', function () {
      expect(this.user.id).toBe(1);
      expect(this.user.firstName).toBe('An overridden value');
    });
  });
});
