module.exports = function jasmineLet(key, callback) {
  Object.defineProperty(this, key, {
    get() {
      return callback();
    }
  });
};
