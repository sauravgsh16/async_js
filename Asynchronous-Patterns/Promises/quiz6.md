# Question 6

Create a process flow which publishes a file from a server, then realises that
the user needs to login, then makes a login request, the whole chain should
error out if it takes longer than 3 seconds. Use `catch` to handle errors and
timeouts.

```js

function authenticate() {
    console.log("Authenticating");
    return new Promise(resolve => setTimeout(resolve, 2000, {status: 200}));
}

function publish() {
    console.log('Publishing');
    return new Promise(resolve => setTimeout(resolve, 2000, {status: 403}));
}

function timeout(sleep) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, sleep, "timed out")
    });
}

Promise.race([publish(), timeout(3000)])
    .then(status => {
        if (status !== 200) {
            return authenticate()
        }
    })
    .then(status => console.log(status))
    .catch(err => console.log(err));

```