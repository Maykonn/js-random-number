const crypto = require('crypto');
const fpe = require('node-fpe');
const NumberLength = require('./NumberLength.js');

class AbstractRandomNumber {

  /**
   * @param {NumberLength} length
   */
  constructor(length) {
    this._value = undefined;

    /**
     * @type {NumberLength}
     * @private
     */
    this._length = undefined;
    this.setLength(length);
  }

  /**
   * @return {number}
   */
  getValue() {
    return this._value;
  }

  /**
   * @return {NumberLength}
   */
  getLength() {
    return this._length;
  }

  /**
   * @param {NumberLength} length
   */
  setLength(length) {
    this._validateNumberLengthInstance(length);
    this._length = length;
  }

  /**
   * Validate if NumberLengthInstance param is instance of NumberLength object
   * @param {NumberLength} NumberLengthInstance
   * @return {boolean}
   * @private
   */
  _validateNumberLengthInstance(NumberLengthInstance) {
    if (!(NumberLengthInstance instanceof NumberLength)) {
      throw new Error('The length param must be an instance of NumberLength object');
    }

    return true;
  }

  /**
   * Return a new number with strong randomness
   * @param {number} number
   * @return {string}
   * @protected
   */
  _increaseNumberRandomness(number) {
    const bytes = 256;
    const cipher = fpe({password: crypto.randomBytes(bytes)});
    return cipher.encrypt(number.toString());
  }

}

module.exports = AbstractRandomNumber;
