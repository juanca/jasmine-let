module.exports = function jasmineLet(key, callback) {
  Object.defineProperty(this, key, {
    configurable: true,
    get() {
      delete this[key];
      return this[key] = callback();
    }
  });
};
