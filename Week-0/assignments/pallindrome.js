var str = "laaaaaaaal";
str=str.toLowerCase();
function checkPallidrome(str) {
    str += str;
    var index = str.length-1;
    for (let i = 0; i < str.length / 2; i++, index--) if (str[i] != str[index]) return false;
    return true;

}
console.log(checkPallidrome(str));