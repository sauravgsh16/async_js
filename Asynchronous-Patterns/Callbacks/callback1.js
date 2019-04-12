// Callback Quiz

/*
1) In the below code, we need to fix it such that no error is thrown.
   Only condition is that we cannot move the position when message is declared.
function doAsyncTask(cd) {
    cb();
}

doAsyncTask(_ => console.log(message));

let message = "Callback Called"
*/

function doAsyncTask(cb) {
    setImmediate(() => {
        console.log('Async Task calling Callback');
        cb();
    })
}

doAsyncTask(() => { console.log(message) })
let message = 'Callback called'
