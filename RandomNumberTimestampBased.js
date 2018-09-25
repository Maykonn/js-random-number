const crypto = require('crypto');
const fpe = require('node-fpe');
const AbstractRandomNumber = require('./AbstractRandomNumber.js');
const RandomNumber = require('./RandomNumber.js');
const NumberLength = require('./NumberLength.js');

class RandomNumberTimestampBased extends AbstractRandomNumber {

  /**
   * If a length less than the length of current timestamp value is given
   * the length of the current timestamp value will be used.
   *
   * If the given length is 0 or not given, the length will be a random number between the
   * length of current timestamp value and Number.MAX_SAFE_INTEGER.toString().length.
   *
   * @param {NumberLength} length
   */
  constructor(length) {
    super(length);

    /**
     * @type {{encrypt, decrypt}}
     * @private
     */
    this._cipher = fpe({password: crypto.randomBytes(256)});
    this._timestampLength = undefined;
    this._value = this._generate();
  }

  _generate() {
    let now = Date.now().toString();
    this._timestampLength = now.length;
    console.log(now);

    // the length of a timestamp based number cannot be
    // less than the length of the current timestamp value
    if (this.getLength().getValue() < this._timestampLength) {
      this.setLength(new NumberLength(this._timestampLength));
    }

    let numberLength = this.getLength().getValue();

    if (this._timestampLength < numberLength) {
      const pad = new RandomNumber(new NumberLength(numberLength - this._timestampLength));

      // concatenation of current timestamp (string) and pad (string), not a number increment
      now += pad.getValue().toString();
    }

    return parseInt(this._cipher.encrypt(now.toString()));
  }

  /**
   * Number's creation timestamp
   *
   * @return {number}
   */
  getTimestamp() {
    const timestamp = this._cipher.decrypt(this.getValue().toString());
    return parseInt(timestamp.slice(0, this._timestampLength));
  }

}

module.exports = RandomNumberTimestampBased;
