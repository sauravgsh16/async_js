const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const files = ['../Files/test.txt', '../Files/test1.txt']

let promises = files.map(name => readFile(name, 'utf8'));

Promise.all(promises)
    .then(val => console.log(val))
    .catch(err => console.error(err));


let car1 = new Promise((resolve, reject) => setTimeout(reject, 1000, "Car 1."));
let car2 = new Promise(resolve => setTimeout(resolve, 3000, "Car 2."));
let car3 = new Promise(resolve => setTimeout(resolve, 2000, "Car 3."));

Promise.race([car1, car2, car3])
    .then(val => console.log('Promise resolved', val))
    .catch(err => console.error('Promise Rejected', err));