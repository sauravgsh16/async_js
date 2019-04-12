## Promises

We create an instance of a promise by calling 'new' on the Promise class,
like so:

```js
const promise = new Promise((resolve, reject) => {
    // resolve? reject?
})
```

Inner this inner function we perform our asynchronous processing and then when
we are ready we call`resolve()`, like so:

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Work Complete");
        resolve();
    }, 1000)
});
```

We usually return this promise from a function, like so:

```js

function doAsyncTask() {
    // <-- NOTE: Not passing in a callback
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Work Complete");
            resolve();
        }, 1000)
    });
    return promise;
}
```

If there was as error in the async task then we call the `reject()` function
like so:

```js

function doAsyncTask() {
    let error = false; // to minic a success or error response
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Work Complete");
            if (error) {
                reject();
            } else {
                resolve();
            }
        }, 1000)
    });
    return promise
}
```


## Promise Notifications

We can get notified when a promise `resolves` by attaching a _success_ handler
to it's `then` function, like so;

```js
doAsyncTask().then(() => console.log("Task Completed!"));
```

`then` can take two arguments, the second argument is a _error_ handler that gets
called if the promise is `rejected`, like so:

```js
doAsyncTask().then(
    () => console.log("Task Completed!"),
    () => console.log("Task Errored!")
);
```

Any values we pass to the `resolve` and `reject` functions, are passed along 
to the _error_ and _success_ handlers, like so:

```js
function doAsyncTask() {
    let error = false;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("error");
            } else {
                resolve("done");
            }
        }, 1000)
    });
    return promise
}

doAsyncTask().then(
    val => console.log(val),
    err => console.log(err)
);
```