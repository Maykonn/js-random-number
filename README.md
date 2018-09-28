# JS Random Number

Generate Random Numbers and Random Numbers Timestamp Based using strong randomized bytes as seeds.

## Random Numbers

Random numbers are generated with strong randomness algorithm using the Node.js Crypto module.

## Random Numbers Timestamp Based

The same way which random numbers the timestamp based numbers are generated with strong randomized bytes to seed
the generation randomness, but the number will be randomized with timestamp as start which decreases the collision probability.



Another important note about Timestamp Based Numbers is that the algorithm can generate a random pad value to accomplish 
the configured length to generate the number. For example, suppose that you wants a number with the max safe length but based
on timestamp, you might do:   

```
const Configuration = require('../src/Configuration.js');
const RandomNumberGenerator = require('../RandomNumberGenerator.js');


```
