const crypto = require('crypto');
const fpe = require('node-fpe');
const Configuration = require('./Configuration.js');

class AbstractRandomNumber {

  /**
   * @param {Configuration} NumberConfiguration
   */
  constructor(NumberConfiguration) {
    this._value = undefined;
    this._length = undefined;

    /**
     * @type {Configuration}
     * @private
     */
    this._configuration = undefined;
    this.setConfiguration(NumberConfiguration);
  }

  /**
   * @return {number}
   */
  getValue() {
    return this._value;
  }

  /**
   * @return {number}
   */
  getLength() {
    return this._length;
  }

  /**
   * @return {Configuration}
   */
  getConfiguration() {
    return this._configuration;
  }

  /**
   * @param {Configuration} NumberConfiguration
   */
  setConfiguration(NumberConfiguration) {
    this._validateConfigurationInstance(NumberConfiguration);
    this._configuration = NumberConfiguration;
  }

  /**
   * Validate if NumberConfiguration param is instance of Configuration object
   * @param {Configuration} NumberConfiguration
   * @return {boolean}
   * @private
   */
  _validateConfigurationInstance(NumberConfiguration) {
    if (!(NumberConfiguration instanceof Configuration)) {
      throw new Error('The NumberConfiguration param must be an instance of Configuration object');
    }

    return true;
  }

  /**
   * Return a new number with strong randomness
   * @param {number} number
   * @return {number}
   * @protected
   */
  _increaseNumberRandomness(number) {
    const bytes = 256;
    const cipher = fpe({password: crypto.randomBytes(bytes)});

    let random = cipher.encrypt(number.toString());
    if (random.toString().charAt(0) === '0') {
      return this._increaseNumberRandomness(number);
    }

    return parseInt(random);
  }

}

module.exports = AbstractRandomNumber;
