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
  }

  /**
   * @return {number}
   * @protected
   */
  _generate() {
    const lengthValue = this.getConfiguration().getMaxLength().getValue();

    const number = Math.floor(
      Math.pow(10, lengthValue - 1) +
      Math.random() * (Math.pow(10, lengthValue) - Math.pow(10, lengthValue - 1) - 1)
    );

    return super._increaseNumberRandomness(number);
  }

}

module.exports = RandomNumber;
