const NumberLength = require('./NumberLength.js');
const RandomNumber = require('./RandomNumber.js');
const RandomNumberTimestampBased = require('./RandomNumberTimestampBased.js');

class UniqueNumberGenerator {

  /**
   * Generates a random number with a fixed length (optional) and/or timestamp based (optional).
   *
   * @param {number} length (optional) if not given will be something between 1 and the length of Number.MAX_SAFE_INTEGER
   * @param {boolean} timestampBased (optional) if the number will be randomized by a timestamp or not
   */
  constructor(length = 0, timestampBased = false) {
    if (length && typeof length !== 'number') {
      throw new Error('The length param must be a number');
    }

    this._value = this._generate(length, timestampBased);
  }

  /**
   * @return {RandomNumberTimestampBased|RandomNumber}
   */
  getValue() {
    return this._value;
  }

  _generate(length, timestampBased) {
    return (
      Boolean(timestampBased) ?
        new RandomNumberTimestampBased(new NumberLength(length)) :
        new RandomNumber(new NumberLength(length))
    );
  }

}

module.exports = UniqueNumberGenerator;
