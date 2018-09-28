# JS Random Number

With this package, you can create Random Numbers and Timestamp Based Random Numbers with low probability of collision 
using strong randomized bytes as seeds. You can specify the min and max lengths (which will generate a random length 
between this values) or configure a specific length.

## Installation

With npm:

```
npm i js-random-number
```

Or just clone this repository and import the `./JsRandomNumber.js` file into your application.

```
https://github.com/Maykonn/js-random-number.git
```

## Random Numbers

Random Numbers are generated with strong randomized bytes to seed the random number generation algorithm using the 
[Node.js crypto module](https://nodejs.org/api/crypto.html). The most simple way to generate a random number is:

```JS
const JsRandomNumber = require('js-random-number');
  
const RandomNumber = new JsRandomNumber.Generator();
console.log('Random Number:');
console.log(RandomNumber.getNumber());
console.log('\n');
console.log('Random Number Value:', RandomNumber.getNumber().getValue());
```

The console response might be:

```
Random Number:
RandomNumber {
  _configuration: 
   Configuration {
     _minLength: NumberLength { _value: 8 },
     _maxLength: NumberLength { _value: 16 },
     _timestampBased: false },
  _length: NumberLength { _value: 14 },
  _value: 83381838615074 }
  
Random Number Value: 1510314403
```

Note that the min and max length are randomly generated and that the length generated is 14 that accomplishes the 
configuration requirements. But, when necessary you can configure the min and max length manually using the `Configuration` object:

```JS
const JsRandomNumber = require('js-random-number');
const NumberConfig = new JsRandomNumber.Configuration();
  
NumberConfig.setMinLength(4);
NumberConfig.setMaxLength(10);
  
const RandomNumber = new JsRandomNumber.Generator(NumberConfig);
console.log('Random Number:');
console.log(RandomNumber.getNumber());
```  

And now the console response will be different:

```
Random Number:
RandomNumber {
  _configuration: 
   Configuration {
     _minLength: NumberLength { _value: 4 },
     _maxLength: NumberLength { _value: 10 },
     _timestampBased: false },
  _length: NumberLength { _value: 6 },
  _value: 264841 }
```

Maybe you want to generate numbers with a specific length, you might do:

```JS
const JsRandomNumber = require('js-random-number');
const NumberConfig = new JsRandomNumber.Configuration();
NumberConfig.setLength(6);
```

That's will configure to 6 the number length.

The random number rules are:
- The number max length never will be greater than the `Number.MAX_SAFE_INTEGER` length
- The length can be between the min and max length

## Timestamp Based Random Numbers

The same way which random numbers the timestamp based numbers are generated with strong randomized bytes to seed
the generation randomness, but the number will be randomized with timestamp as the start, which decreases the collision probability.

```JS
const JsRandomNumber = require('js-random-number');
  
const NumberConfig = new JsRandomNumber.Configuration();
NumberConfig.timestampBased();
  
const RandomNumberTimestampBased = new JsRandomNumber.Generator(NumberConfig);
console.log('Random Number timestamp based:');
console.log(RandomNumberTimestampBased.getNumber());
```

The timestamp based random number rules are:
- The number min length never will be less than the timestamp length
- The number max length never will be greater than the `Number.MAX_SAFE_INTEGER` length
- The length can be between the min and max length

Another important note about Timestamp Based Numbers is that the algorithm can generate a random pad value to accomplish 
the configured length to generate the number. For example, suppose that you want a number with a length between the max 
safe length and timestamp length, and based on timestamp, you might do:   

```JS
const JsRandomNumber = require('js-random-number');
  
const NumberConfig = new JsRandomNumber.Configuration();
NumberConfig.timestampBased();
NumberConfig.setMaxLength(JsRandomNumber.NumberLength.getMaxSafeLength());
  
const RandomNumberTimestampBased = new JsRandomNumber.Generator(NumberConfig);
console.log('Random Number timestamp based:');
console.log(RandomNumberTimestampBased.getNumber());
```

The console response might be:

```
Random Number timestamp based:
RandomNumberTimestampBased {
  _configuration: 
   Configuration {
     _minLength: NumberLength { _value: 13 },
     _maxLength: NumberLength { _value: 16 },
     _timestampBased: true },
  _length: NumberLength { _value: 15 },
  _value: 728172850677692,
  _padLength: NumberLength { _value: 2 },
  _timestamp: 1538153492112,
  _timestampLength: NumberLength { _value: 13 } }
```

This example padded with a length of 2 decreases a lot the collision probability even for calls executes at same millisecond. 

# Community Support
If you need help with this bundle please consider [open a question on StackOverflow](https://stackoverflow.com/questions/ask)
using the `js-random-number` tag, it is the official support platform for this bundle.

Github Issues are dedicated to bug reports and feature requests.

# Contributing
You can contribute to this project cloning this repository and in your clone you just need to create a new branch using a 
name related to the new functionality which you'll create.  
When you finish your work, you just need to create a pull request which will be revised, merged to master branch (if the code 
doesn't break the project) and published as a new release.
