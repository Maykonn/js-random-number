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
    this._minLength = undefined;

    /**
     * @type {NumberLength}
     * @private
     */
    this._maxLength = undefined;

    /**
     * @type {boolean}
     * @private
     */
    this._timestampBased = undefined;
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
