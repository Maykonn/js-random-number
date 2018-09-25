"use strict";

const UniqueNumberGenerator = require('../UniqueNumberGenerator.js');
const UniqueNumber = new UniqueNumberGenerator();
 console.log('Unique Number:', UniqueNumber.getValue());

const UniqueNumberTimestampBased = new UniqueNumberGenerator(0, true);
console.log('Unique Number:', UniqueNumberTimestampBased.getValue());
console.log('Unique Number Timestamp:', UniqueNumberTimestampBased.getValue().getTimestamp());
