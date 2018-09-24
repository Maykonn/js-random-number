const UniqueNumber = require('./UniqueNumber.js');
const UniqueNumberTimestampBased = require('./UniqueNumberTimestampBased.js');

class UniqueNumberGenerator {

  static timestampBased() {
    this._timestampBased = true;
    return this;
  }

  /**
   * Use the length param to define the number length
   * @param {number} length
   * @returns {UniqueNumber}
   */
  static getRandomNumber(length = 0) {
    return new UniqueNumber(length, this._timestampBased);
  }

  /**
   * Generates a random unique number as string based on time
   * @param {number} length If you need to keep more than one number with same length, set the pad param to be > 0
   * @return {UniqueNumberTimestampBased}
   */
  // static getRandomNumberTimestampBased(length = 0) {
  //   return new UniqueNumberTimestampBased(length);
  // }
}

module.exports = UniqueNumberGenerator;
