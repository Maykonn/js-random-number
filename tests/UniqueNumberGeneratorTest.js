"use strict";

const Configuration = require('../Configuration.js');
const UniqueNumberGenerator = require('../UniqueNumberGenerator.js');

const NumberConfig = new Configuration();
NumberConfig.setMinLength(1);
NumberConfig.setMaxLength(16);

const UniqueNumber = new UniqueNumberGenerator(NumberConfig);
console.log('Unique Number:', UniqueNumber.getValue());

// NumberConfig.reset();
// NumberConfig.timestampBased();
// const UniqueNumberTimestampBased = new UniqueNumberGenerator(NumberConfig);
// console.log('Unique Number:', UniqueNumberTimestampBased.getValue());
// console.log('Unique Number Timestamp:', UniqueNumberTimestampBased.getValue().getTimestamp());



