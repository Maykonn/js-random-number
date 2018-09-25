const NumberLength = require('./NumberLength.js');

class RandomNumber {

  /**
   * @param {NumberLength} length
   */
  constructor(length) {
    /**
     * @type {NumberLength}
     * @private
     */
    this._length = length;

    /**
     * @type {number}
     * @private
     */
    this._value = this.getValue();
  }

  /**
   * @return {NumberLength}
   */
  getLength() {
    return this._length;
  }

  /**
   * @return {number}
   */
  getValue() {
    if (typeof this._value === 'undefined') {
      this._value = this._generate();
    }

    return this._value;
  }

  /**
   * @return {number}
   * @protected
   */
  _generate() {
    this._validateNumberLengthInstance(this._length);
    const lengthValue = this._length.getValue();

    return Math.floor(
      Math.pow(10, lengthValue - 1) +
      Math.random() * (Math.pow(10, lengthValue) - Math.pow(10, lengthValue - 1) - 1)
    );
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
}

module.exports = RandomNumber;
