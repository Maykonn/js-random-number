const NumberLength = require('./NumberLength.js');

class RandomNumber {

  /**
   * @param {RandomNumber} length
   */
  constructor(length) {
    if (!(length instanceof NumberLength)) {
      throw new Error('The length param must be an instance of NumberLength object');
    }

    this._length = length;
    this._value = this.generate();
  }

  getLength() {
    return this._length;
  }

  getValue() {
    return this._value;
  }

  generate() {
    const length = this._length.getValue();
    return Math.floor(
      Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
    );
  }

}

module.exports = RandomNumber;
