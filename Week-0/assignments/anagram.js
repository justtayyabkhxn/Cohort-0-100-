const str1 = "sana";
const str2 = "anas";

function anagram(str1, str2) {
    if (str1.length != str2.length) return false;

    let sortedstr1 = str1.split('').sort().join('');
    let sortedstr2 = str2.split('').sort().join('');

    return sortedstr1 == sortedstr2

}
console.log(anagram(str1, str2));