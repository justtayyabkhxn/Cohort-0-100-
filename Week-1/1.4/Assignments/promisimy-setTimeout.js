
function promisify(n) {
    return new Promise(function (resolve) {
        let data = "Tayyab";
        setTimeout(function () {
            resolve(data)
        }, n * 1000);
    });

}


promisify(2).then(function () {
    console.log("2 seconds have passed");
});