count=10;
function a() {
    console.clear();
    console.log("The bomb will blast in: " + count--)
}
for (let i = 1; i < 11; i++) {
    setTimeout(a, i * 1000);
}