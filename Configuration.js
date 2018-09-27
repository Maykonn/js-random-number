const NumberLength = require('./NumberLength.js');

class Configuration {

  constructor() {
    this.reset();
  }

  /**
   * @return {Configuration}
   */
  reset() {
    /**
     * @type {NumberLength}
     * @private
     */
    this._minLength = 0;

    /**
     * @type {NumberLength}
     * @private
     */
    this._maxLength = 0;

    /**
     * @type {boolean}
     * @private
     */
    this._timestampBased = false;
    return this;
  }

  /**
   * @param {number} length
   * @return {Configuration}
   */
  setLength(length) {
    this._validateLength(length);
    const Length = new NumberLength(length);
    this._minLength = Length;
    this._maxLength = Length;
    return this;
  }

  /**
   * @param {number} length
   * @return {Configuration}
   */
  setMinLength(length) {
    this._validateLength(length);
    this._minLength = new NumberLength(length);
    return this;
  }

  /**
   * @return {NumberLength}
   */
  getMinLength() {
    if (!this._minLength) {
      this._minLength = new NumberLength();
    }

    if (this._maxLength && this._minIsGreaterThanMax()) {
      this._minLength = new NumberLength(this._maxLength.getValue());
    }

    return this._minLength;
  }

  /**
   * @param {number} length
   * @return {Configuration}
   */
  setMaxLength(length) {
    this._validateLength(length);
    this._maxLength = new NumberLength(length);
    return this;
  }

  /**
   * @return {NumberLength}
   */
  getMaxLength() {
    if (!this._maxLength) {
      this._maxLength = new NumberLength();
    }

    if (this._minLength && this._minIsGreaterThanMax()) {
      this._maxLength = new NumberLength(this._minLength.getValue());
    }

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

  /**
   * @private
   */
  _minIsGreaterThanMax() {
    return this._minLength.getValue() > this._maxLength.getValue();
  }

}

module.exports = Configuration;
