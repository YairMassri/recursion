function removeVowel(str) {
    if (str.length === 0) { return ""}
    return ('aeiouAEIOU'.indexOf(str[0]) > -1) ? "" + removeVowel(str.slice(1)) 
    : str[0]+removeVowel(str.slice(1))

}

console.log(removeVowel('hello'))