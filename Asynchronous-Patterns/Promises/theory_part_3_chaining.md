## Chaining

We can also connect a series of `then` handlers together in a chain, like so:

```js
const promise = Promise.resolve("done");
promise
    .then((val) => {
        console.log(val);
        return "done2"
    })
    .then((val) => {
        console.log(val)
    })
//done
//done2
```

We have to return _something_ at each `then`, otherwise it doesn't get passed to
the next `then`
```js
const prom = Promise.resolve("done");

prom
    .then((val) => {
        console.log(val)
    })
    .then((val) => {
        console.log(val)
    });

// done
// undefined
```

Forking a promise is different from chaining a promise
```js
const promise = Promise.resolve("done");
promise.then(val => {
    console.log(val);
    return "done2"
});

promise.then(val => console.log(val)); // Does not get the result of previous then
// 'done'
// 'done'
```

We can also pause execution waiting for another promise to resolve.

```js
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
```