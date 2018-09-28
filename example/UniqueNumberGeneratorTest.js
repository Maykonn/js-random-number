"use strict";

const JsRandomNumber = require('../JsRandomNumber.js');

// Configuring the random number generation
const NumberConfig = new JsRandomNumber.Configuration();
NumberConfig.setMinLength(4);
NumberConfig.setMaxLength(JsRandomNumber.NumberLength.getMaxSafeLength());

// Generates a random number
const RandomNumber = new JsRandomNumber.Generator(NumberConfig);
console.log('Random Number:');
console.log(RandomNumber.getNumber());
console.log('\n');
console.log('Random Number Value:', RandomNumber.getNumber().getValue());
console.log('\n');

// Reconfiguring the random number generation
NumberConfig.reset();
NumberConfig.timestampBased();
NumberConfig.setMinLength(15);
NumberConfig.setMaxLength(JsRandomNumber.NumberLength.getMaxSafeLength());


// Generates a random number timestamp based
const RandomNumberTimestampBased = new JsRandomNumber.Generator(NumberConfig);
console.log('Random Number timestamp based:');
console.log(RandomNumberTimestampBased.getNumber());
