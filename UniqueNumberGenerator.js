const Configuration = require('./Configuration.js');
const NumberLength = require('./NumberLength.js');
const AbstractRandomNumber = require('./AbstractRandomNumber.js');
const RandomNumber = require('./RandomNumber.js');
const RandomNumberTimestampBased = require('./RandomNumberTimestampBased.js');

class UniqueNumberGenerator {

  /**
   * Generates a random number
   *
   * @param {Configuration|undefined} NumberConfiguration
   */
  constructor(NumberConfiguration = undefined) {
    this._value = this._generate(NumberConfiguration);
  }

  /**
   * Retrieves the number
   *
   * @return {AbstractRandomNumber}
   */
  getValue() {
    return this._value;
  }

  /**
   * Generates a random number
   *
   * @param {Configuration} NumberConfiguration
   * @return {AbstractRandomNumber}
   * @private
   */
  _generate(NumberConfiguration) {
    // If configuration instance not provided, generates a random configuration
    if (!(NumberConfiguration instanceof Configuration)) {
      NumberConfiguration = this._generateConfiguration();
    }

    return (
      NumberConfiguration.isTimestampBased() ?
        new RandomNumberTimestampBased(NumberConfiguration) :
        new RandomNumber(NumberConfiguration)
    );
  }

  /**
   * Generates a random Configuration
   *
   * @return {Configuration}
   * @private
   */
  _generateConfiguration() {
    const NumberConfiguration = new Configuration();
    return NumberConfiguration.setLength((new NumberLength()).getValue());
  }

}

module.exports = UniqueNumberGenerator;
