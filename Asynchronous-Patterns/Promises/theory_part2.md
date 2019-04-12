# Immediate Resolution or Rejection

We can create an immediately _resolved_ Promise by using the `Promise.resolve()`
method, like so:

```js
let promise = Promise.resolve("Done")
```

And an immediately _rejected_ Promise by using the `Promise.reject()` method,
like so;

```js
let promise = Promise.reject("Fail")
```

One nice thing about Promises is that if we add a `then` handler after the 
promise resolves or rejects the handler _still_ gets called

```js
let promise = Promise.resolve("done");

promise.then(val => console.log(val));
// 'done'
```

Promises are always async

Unlike callbacks, which can be synchronous and asynchronous, Promises are always
async, eg:
```js

function doAsyncTask() {
    Promise.resolve();
}

doAsyncTask().then(
    () => console.log(message)
);

let message = "Promise resolved"

```