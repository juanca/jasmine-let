module.exports = function jasmineLet(key, callback) {
  Object.defineProperty(this, key, {
    configurable: true,
    get() {
      return callback();
    }
  });
};
