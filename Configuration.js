class Configuration {

  constructor() {
    this.reset();
  }

  /**
   * @return {Configuration}
   */
  reset() {
    this._minLength = undefined;
    this._maxLength = undefined;
    this._timestampBased = undefined;
    return this;
  }

  /**
   * @param {number} length
   * @return {Configuration}
   */
  setLength(length) {
    this._validateLength(length);
    this._minLength = length;
    this._maxLength = length;
    return this;
  }

  /**
   * @param {number} length
   * @return {Configuration}
   */
  setMinLength(length) {
    this._validateLength(length);
    this._minLength = length;
    return this;
  }

  /**
   * @return {number}
   */
  getMinLength() {
    return this._minLength;
  }

  /**
   * @param {number} length
   * @return {Configuration}
   */
  setMaxLength(length) {
    this._validateLength(length);
    this._maxLength = length;
    return this;
  }

  /**
   * @return {number}
   */
  getMaxLength() {
    return this._maxLength;
  }

  /**
   * @return {Configuration}
   */
  timestampBased() {
    this._timestampBased = true;
    return this;
  }

  /**
   * @return {boolean}
   */
  isTimestampBased() {
    return Boolean(this._timestampBased);
  }

  /**
   * @param {number} length
   * @return {boolean}
   * @private
   */
  _validateLength(length) {
    if (length && typeof length !== 'number') {
      throw new Error('The length param must be a number');
    }

    return true;
  }

}

module.exports = Configuration;
