const findLongestWord = function (string) {
    const arrayOfWords = string.split(' ');
    let compareValue = '';
    for (const word of arrayOfWords) {
        if (word.length > compareValue.length) {
            compareValue = word;
        }
        continue;
    }
    return compareValue;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
// 'jumped'

console.log(findLongestWord('Google do a roll')); 
// 'Google'

console.log(findLongestWord('May the force be with you')); 
// 'force'