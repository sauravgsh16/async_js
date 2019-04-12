# Error Handling

Promises pass an error along the chain till it finds an error handler.
So we don't need to define an error handler for each `then` function, we can
just add one at the end, like so:

```js
Promise.reject('fail')
    .then(val => console.log(val))
    .then(val => console.log(val), err => console.error(err));
```

If we throw an exception from our promise function or one of the success handlers,
the promise gets rejected and the error handler is called, like so:

```js
new Promise((resolve, reject) => {
    throw 'fail';
})
    .then(val => console.log(val))
    .then(val => console.log(val), err => console.error(err));
```
```js
Promise.resolve('done')
    .then(val => {
        throw 'fail';
    })
    .then(val => console.log(val), err => console.log(err));
```

The `catch` function works exaclty the same way as the `then` error handler,
it's just a cleaner and more explicitly describes our intent to handle errors

```js
Promise.resolve('done')
    .then(val => {
        throw 'fail';
    })
    .then(val => console.log(val))
    .catch(err => console.log(err))

// The above catch is same as below:
Promise.resolve('Done')
    .then(val => {
        throw 'fail';
    })
    .then(val => console.log(val))
    .then((null, err) => console.log(err));
```

# Finally
Support website:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally

```js
Promise.resolve('done')
    .then(val => {
        throw new Error('fail');
    })
    .then(val => console.log(val))
    .catch(err => console.error(err))
    .finally(_ => console.log('Cleaning up')); // <-- Coming soon
```