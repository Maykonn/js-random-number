class Configuration {

  constructor() {
    this.reset();
  }

  setLength(length) {
    this._minLength = length;
    this._maxLength = length;
    return this;
  }

  setMinLength(length) {
    this._minLength = length;
    return this;
  }

  setMaxLength(length) {
    this._maxLength = length;
    return this;
  }

  timestampBased() {
    this._timestampBased = true;
    return this;
  }

  reset() {
    this._minLength = undefined;
    this._maxLength = undefined;
    this._timestampBased = undefined;
    return this;
  }

}

module.exports = Configuration;
