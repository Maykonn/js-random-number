const Configuration = require('./Configuration.js');
const NumberLength = require('./NumberLength.js');
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
   * @return {RandomNumber|RandomNumberTimestampBased}
   */
  getValue() {
    return this._value;
  }

  /**
   * @param {Configuration} NumberConfiguration
   * @return {RandomNumber|RandomNumberTimestampBased}
   * @private
   */
  _generate(NumberConfiguration) {
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
   * @return {Configuration}
   * @private
   */
  _generateConfiguration() {
    const NumberConfiguration = new Configuration();
    return NumberConfiguration.setLength((new NumberLength()).getValue());
  }

}

module.exports = UniqueNumberGenerator;
