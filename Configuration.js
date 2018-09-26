class Configuration {

  constructor() {
    this.reset();
  }

  reset() {
    this._minLength = undefined;
    this._maxLength = undefined;
    this._timestampBased = undefined;
    return this;
  }

  setLength(length) {
    this._validateLength(length);
    this._minLength = length;
    this._maxLength = length;
    return this;
  }

  setMinLength(length) {
    this._validateLength(length);
    this._minLength = length;
    return this;
  }

  setMaxLength(length) {
    this._validateLength(length);
    this._maxLength = length;
    return this;
  }

  timestampBased() {
    this._timestampBased = true;
    return this;
  }

  _validateLength(length) {
    if (length && typeof length !== 'number') {
      throw new Error('The length param must be a number');
    }

    return true;
  }

}

module.exports = Configuration;
