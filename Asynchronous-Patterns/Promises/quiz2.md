## Question 2

Load a file from disk using readFile and then compress it using the async zlib
node library, use a promise chain to process this work.

```js
const fs = require('fs');
const zlib = require('zlib');

function gzip(data) {
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (err, result) => {
            if (err) return reject();
            resolve(result);
        })
    })
}

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
    return promise;
}

readFile('../Files/test.txt', "utf8").then(
    data => {
        gzip(data).then(
            res => console.log(res),
            err => console.error("Failed to Zip", err)
        );
    },
    err => console.log("Failed to Read", err)
)
```