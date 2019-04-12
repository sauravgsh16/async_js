function authenticate() {
    console.log("Authenticating");
    return new Promise(resolve => setTimeout(resolve, 2000, { status: 200 }));
}

function publish() {
    console.log('Publishing');
    return new Promise(resolve => setTimeout(resolve, 2000, { status: 403 }));
}

function timeout(sleep) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, sleep, "timeout")
    });
}

Promise.race([publish(), timeout(3000)])
    .then(res => {
        if (res.status === 403) {
            return authenticate()
        }
        return res
    })
    .then(res => console.log(res, "Published"))
    .catch(err => {
        if (err === 'timeout') {
            console.error("Request timed out")
        } else {
            console.error(err)
        }
    });
