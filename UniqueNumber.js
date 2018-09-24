class UniqueNumber {

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

    this._value = undefined;
    this._timestampBased = Boolean(timestampBased);

    this._length = this._calculateLength(length);
    this._value = this._generate();
  }

  getValue() {
    return this._value;
  }

  _calculateLength(length) {
    const maxLength = Number.MAX_SAFE_INTEGER.toString().length;

    if (length > 0 && length > maxLength) {
      length = maxLength;
    } else if (!length) {
      length = Math.floor(Math.random() * maxLength) + 1;
    }

    return length;
  }

  _generate() {
    let number = 0;

    if (!this._timestampBased) {
      number = Math.floor(
        Math.pow(10, this._length - 1) +
        Math.random() * (Math.pow(10, this._length) - Math.pow(10, this._length - 1) - 1)
      );
    }

    return number;
  }

}

module.exports = UniqueNumber;
