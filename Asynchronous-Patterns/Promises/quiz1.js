
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

readFile('../Files/test.txt', { "encoding": "utf8" }).then(
    data => console.log("File read", data),

    err => console.log("Failed to read", err)
)

/*
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile)

readFile('../Files/test.txt', "utf8").then(
    data => console.log("File read", data),
    err => console.log("Failed to read file", err)
)
*/
function doAsyncTask() {
    return Promise.resolve();
}

doAsyncTask().then(
    () => console.log(message)
);

let message = "Promise resolved"

// Pause execution waiting for another promise to resolve
Promise.resolve("done")
    .then(val => {
        console.log(val);

        return new Promise(resolve => {
            setTimeout(() => {
                resolve("done2")
            }, 1000)
        });
    })
    .then(val => console.log(val))