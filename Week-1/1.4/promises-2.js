var d = new Promise(function (resolve) {

});
console.log(d); //HERE THE RESOLVE WAS NOT CALLED


var d = new Promise(function (resolve) {
    resolve();
});
function callback() {
    console.log(d);
}
(d.then(callback)); //HERE WE ARE SEEING UNDEFINED BECAUSE NO DATA WAS SENT BACK


var d = new Promise(function (resolve) {
    resolve("Tayyab");
});
function callback() {
    console.log(d);
}
(d.then(callback)); //We are seeing whatever was sent