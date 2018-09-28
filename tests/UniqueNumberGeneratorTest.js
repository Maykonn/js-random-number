"use strict";

const Configuration = require('../src/Configuration.js');
const RandomNumberGenerator = require('../RandomNumberGenerator.js');

// Configuring the random number generation
const NumberConfig = new Configuration();
NumberConfig.setMinLength(8);
NumberConfig.setMaxLength(16);

// Generates a random number
const RandomNumber = new RandomNumberGenerator(NumberConfig);
console.log('Random Number:');
console.log(RandomNumber.getValue());
console.log('\n');

// Reconfiguring the random number generation
NumberConfig.reset();
NumberConfig.timestampBased();

// Generates a random number timestamp based
const RandomNumberTimestampBased = new RandomNumberGenerator(NumberConfig);
console.log('Random Number timestamp based:');
console.log(RandomNumberTimestampBased.getValue());
