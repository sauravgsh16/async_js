const fs = require('fs');
const zlib = require('zlib');


function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

function gzip(data) {
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

readFile('../Files/test.txt', 'utf8')
    .then(
        data => {
            return gzip(data);
        },
        err => console.error('Failed to read file', err)
    )
    .then(
        data => {
            console.log(data);
        },
        err => console.error('Failed to Zip', err)
    );
