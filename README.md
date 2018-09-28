# JS Random Number

With this package, you can create Random Numbers and Timestamp Based Random Numbers with low probability of collision 
using strong randomized bytes as seeds. You can specify the min and max lengths (which will generate a random length between this values) or configure a specific length.

## Random Numbers

Random Numbers are generated with strong randomized bytes to seed the random number generation algorithm using the 
Node.js Crypto module. The most simple way to generate a random number is:

```JS
const RandomNumberGenerator = require('./RandomNumberGenerator.js');
  
const RandomNumber = new RandomNumberGenerator();
console.log('Random Number timestamp based:');
console.log(RandomNumber.getValue());
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
```

Note that the min and max length are randomly generated and the that the length generate is 14 that accomplishes the 
configuration requirements. But, when necessary you can configure the min and max length manually using the `Configuration` object:

```JS
const Configuration = require('./src/Configuration.js');
const RandomNumberGenerator = require('./RandomNumberGenerator.js');
  
const NumberConfig = new Configuration();
NumberConfig.setMinLength(4);
NumberConfig.setMaxLength(10);
  
const RandomNumber = new RandomNumberGenerator();
console.log('Random Number timestamp based:');
console.log(RandomNumber.getValue());
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
const Configuration = require('./src/Configuration.js');
const NumberConfig = new Configuration();
NumberConfig.setLength(6);
```

That's will configure to 6 the number length.

The random number rules:
- The number max length never will be greater than the Number.MAX_SAFE_INTEGER length
- The length can be between the min and max length

## Random Numbers Timestamp Based

The same way which random numbers the timestamp based numbers are generated with strong randomized bytes to seed
the generation randomness, but the number will be randomized with timestamp as the start which decreases the collision probability.

```JS
const Configuration = require('./src/Configuration.js');
const RandomNumberGenerator = require('./RandomNumberGenerator.js');
  
const NumberConfig = new Configuration();
NumberConfig.timestampBased();
  
const RandomNumberTimestampBased = new RandomNumberGenerator(NumberConfig);
console.log('Random Number timestamp based:');
console.log(RandomNumberTimestampBased.getValue());
```

The timestamp based random number rules:
- The number min length never will be less than the timestamp length
- The number max length never will be greater than the Number.MAX_SAFE_INTEGER length
- The length can be between the min and max length

Another important note about Timestamp Based Numbers is that the algorithm can generate a random pad value to accomplish 
the configured length to generate the number. For example, suppose that you want a number with the max safe length but based
on timestamp, you might do:   

```JS
const Configuration = require('./src/Configuration.js');
const NumberLength = require('./src/NumberLength.js');
const RandomNumberGenerator = require('./RandomNumberGenerator.js');
  
const NumberConfig = new Configuration();
NumberConfig.timestampBased();
NumberConfig.setMaxLength(NumberLength.getMaxSafeLength());
  
const RandomNumberTimestampBased = new RandomNumberGenerator(NumberConfig);
console.log('Random Number timestamp based:');
console.log(RandomNumberTimestampBased.getValue());
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
  _length: NumberLength { _value: 16 },
  _value: 4013455959357612,
  _padLength: NumberLength { _value: 3 },
  _timestamp: 1538144646842,
  _timestampLength: NumberLength { _value: 13 } }
```

This example padded with a length of 3 decreases a lot the collision probability even for calls executes at same millisecond. 
