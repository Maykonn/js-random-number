class UniqueNumber {

  /**
   * Generates a random number with a fixed length (optional).
   * If a fixed length is not provided something random between 1 and the length of
   * Number.MAX_SAFE_INTEGER will be used as length, which is the default behavior.
   *
   * @param {number} length Optional fixed length
   */
  constructor(length = 0) {
    if (length && typeof length !== 'number') {
      throw new Error('The length param must be a number');
    }

    this._value = undefined;
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
    return Math.floor(
      Math.pow(10, this._length - 1) +
      Math.random() * (Math.pow(10, this._length) - Math.pow(10, this._length - 1) - 1)
    );
  }

}

module.exports = UniqueNumber;
