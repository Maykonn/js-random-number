const AbstractRandomNumber = require('./AbstractRandomNumber.js');
const Configuration = require('./Configuration.js');
const NumberLength = require('./NumberLength.js');

class RandomNumber extends AbstractRandomNumber {

  /**
   * A random number
   * @param {Configuration} NumberConfiguration
   */
  constructor(NumberConfiguration) {
    super(NumberConfiguration);

    /**
     * @type {number}
     * @private
     */
    this._value = this._generate();

    /**
     * @type {number}
     * @private
     */
    this._length = new NumberLength(this._value.toString().length);
  }

  /**
   * Generates a random number
   * @return {number}
   * @protected
   */
  _generate() {
    const length = this._calculateLength();

    const number = Math.floor(
      Math.pow(10, length - 1) +
      (Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1))
    );

    return super._increaseNumberRandomness(number);
  }

  /**
   * Randomize a length between configured min and max length
   * @return {number}
   * @private
   */
  _calculateLength() {
    const minLength = this.getConfiguration().getMinLength().getValue();
    const maxLength = this.getConfiguration().getMaxLength().getValue();

    return Math.floor(
      minLength +
      (Math.random() * (maxLength + 1 - minLength))
    );
  }

}

module.exports = RandomNumber;
