const AbstractRandomNumber = require('./AbstractRandomNumber.js');
const Configuration = require('./Configuration.js');

class RandomNumber extends AbstractRandomNumber {

  /**
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
    this._length = this._value.toString().length;
  }

  /**
   * @return {number}
   * @protected
   */
  _generate() {
    const minLength = this.getConfiguration().getMinLength().getValue();
    const maxLength = this.getConfiguration().getMaxLength().getValue();

    // randomize a length between min and max length configured
    const length = Math.floor(
      minLength +
      (Math.random() * (maxLength + 1 - minLength))
    );

    // generate a random number
    const number = Math.floor(
      Math.pow(10, length - 1) +
      (Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1))
    );

    // increasing the number randomness
    return super._increaseNumberRandomness(number);
  }

}

module.exports = RandomNumber;
