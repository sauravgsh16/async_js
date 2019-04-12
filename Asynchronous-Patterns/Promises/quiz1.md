# Question 1

Create a promise version of the async readFile function

```js
const fs = require('fs');

function readFile(filename, encoding) {
    fs.readFile(filename, encoding, (err, data) => {
        // TODO
    });
}
```

# Solution 1
```js
const fs = require('fs');

function readFile(filename, encoding) {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
    return promise
}

readFile('../Files/test.txt', {"encoding": "utf8"}).then(
    data => console.log("File read", data),
    err => console.log("Failed to read file", err)
);
```
# Another solution to 1
The below solution utilized the standard library to prmoisify an asynchronous
function. ** THE FUNCTION SHOULD HAVE AN ERROR FIRST SIGNATURE ** for the 
util.promisify to work
```js
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile)

readFile('../Files/test.txt', "utf8").then(
    data => console.log("File read", data),
    err => console.log("Failed to read file", err)
)
```