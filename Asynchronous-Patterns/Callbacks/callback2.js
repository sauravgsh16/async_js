/*
Question 2:
The below code swallows the error and doesn't pass it up the chain,
make it pass the error up the stack using the next callback.

const fs = require('fs')

function readFileThenDo(next) {
    fs.readFile('./blah.nofile', (err, data) => {
        next(data)
    })
}

readFileThenDo(data => {
    console.log(data)
});
*/

const fs = require('fs')

function readFileThenDo(next) {
    fs.readFile('./blah.nofile', (err, data) => {
        if (err) {
            next(err, null)
        } else {
            next(null, data)
        }
    })
}

readFileThenDo((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
