let str = "Tayyab loves Zoya";
str = str.toLowerCase();

var ans = 0;
function countVowels(str) {

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') ans++;
    }
    return ans;
}
console.log(countVowels(str));
