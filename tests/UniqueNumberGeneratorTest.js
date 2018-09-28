"use strict";

const Configuration = require('../src/Configuration.js');
const UniqueNumberGenerator = require('../RandomNumberGenerator.js');

// Configuring the random number generation
const NumberConfig = new Configuration();
NumberConfig.setMinLength(8);
NumberConfig.setMaxLength(16);

// Generates a random number
const UniqueNumber = new UniqueNumberGenerator(NumberConfig);
console.log('Unique Number:');
console.log(UniqueNumber.getValue());
console.log('\n');

// Reconfiguring the random number generation
NumberConfig.reset();
NumberConfig.timestampBased();

// Generates a random number timestamp based
const UniqueNumberTimestampBased = new UniqueNumberGenerator(NumberConfig);
console.log('Unique Number timestamp based:');
console.log(UniqueNumberTimestampBased.getValue());
