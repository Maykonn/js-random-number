class UniqueNumber {

    /**
     * @param {number} length
     */
    constructor(length) {
        this._length = length;
        this._value = this._generate();
    }

    getValue() {
        return this._value;
    }

    _generate() {
        return Math.floor(
            Math.pow(10, this._length - 1) +
            Math.random() * (Math.pow(10, this._length) - Math.pow(10, this._length - 1) - 1)
        );
    }

}

module.exports = UniqueNumber;