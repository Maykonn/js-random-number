class NumberLength {

  constructor(length) {
    this._value = this._computeLength(length);
  }

  getValue() {
    return this._value;
  }

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
