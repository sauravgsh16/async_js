const fs = require('fs');

function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(filename, encoding, (err, data) => {
                if (err) return reject(err);
                resolve(data);
            });
        }, 5000);
    });
}

function timeout(sleep) {
    return new Promise((_, reject) => {
        setTimeout(reject, sleep, "timeout");
    });
}

Promise.race([readFile('../Files/test.txt', 'utf8'), timeout(1000)])
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err));

