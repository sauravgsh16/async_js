## Multiple Promises

### Promise.all

Used to run an array of promise. Waits till all the promises have been resolved
or rejected. Then it's `then` handler is executed

```js
const util = require('util')
const fs = require('fs')
const readFile = util.promisify(fs.readFile);

const files = ['../Files/test.txt', '../Files/test1.txt']

const promise = files.map(name => readFile(name, 'utf8'));
Promise.all(promise)
    .then(vals => {
        console.log(vals);
    })
    .catch(err => console.error(err));
```
The `catch` function catches the first error occurred in any promise.


### Promise.race

Resolves or Rejects when the first promise in the array resolves or rejects

```js
let car1 = new Promise(resolve => setTimeout(resolve, 1000, "Car 1."));
let car2 = new Promise(resolve => setTimeout(resolve, 2000, "Car 2."));
let car3 = new Promise(resolve => setTimeout(resolve, 3000, "Car 3."));

Promise.race([car1, car2, car3])
    .then(val => console.log(val))
    .catch(err => console.error(err));
```

In case, there is a reject called and it completes before all others are resolved,
`Promise.race` will only care of what completed first
```js
let car1 = new Promise((_, reject) => setTimeout(reject, 1000, "Car 1."));
let car2 = new Promise(resolve => setTimeout(resolve, 2000, "Car 2."));
let car3 = new Promise(resolve => setTimeout(resolve, 3000, "Car 3."));

Promise.race([car1, car2, car3])
    .then(val => console.log('Promise resolved', val))
    .catch(err => console.error('Promise rejected', err));
```
