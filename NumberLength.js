class NumberLength {

  /**
   * @param {number} length
   */
  constructor(length = 0) {
    /**
     * @type {number}
     * @private
     */
    this._value = this._computeLength(length);
  }

  /**
   * @return {number}
   */
  getValue() {
    return this._value;
  }

  /**
   * @param length
   * @return {number}
   * @private
   */
  _computeLength(length) {
    let value = length;
    const maxLength = Number.MAX_SAFE_INTEGER.toString().length;

    if (length > 0 && length > maxLength) {
      value = maxLength;
    } else if (!length) {
      value = Math.floor(Math.random() * maxLength) + 1;
    }

    return value;
  }

}

module.exports = NumberLength;
