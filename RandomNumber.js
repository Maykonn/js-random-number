const AbstractRandomNumber = require('./AbstractRandomNumber.js');
const NumberLength = require('./NumberLength.js');

class RandomNumber extends AbstractRandomNumber {

  /**
   * @param {NumberLength} length
   */
  constructor(length) {
    super(length);

    /**
     * @type {number}
     * @private
     */
    this._value = this._generate();
  }

  /**
   * @return {number}
   * @protected
   */
  _generate() {
    const lengthValue = this.getLength().getValue();

    return Math.floor(
      Math.pow(10, lengthValue - 1) +
      Math.random() * (Math.pow(10, lengthValue) - Math.pow(10, lengthValue - 1) - 1)
    );
  }


}

module.exports = RandomNumber;
