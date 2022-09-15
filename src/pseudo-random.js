/**
 * returns array of all characters from ascii/unicode table whose index is from 33 to 126
 * @returns {*[]}
 */
function getCharacters() {
    const allChars = [];
    for(let i = 33; i <= 126; i++){
        allChars.push(String.fromCharCode(i));
    }
    return allChars;
}

const allChars = getCharacters();

/**
 * Generates pseudo-random password according to given argument/length
 * Uses pseudo-random i.e. Math.random
 * If no argument given, generates 20 length password by default
 * @param length
 * @returns {string}
 */
function generatePseudoRandomPass(length) {
    if(isNaN(length) || length <= 0) return "Oops - Bad argument. Password length should be a number"
    let pass = '';
    let index;
    for(let i = 0; i < length; i++){
        index = Math.floor(Math.random() * 94);
        pass += allChars[index];
    }
    return pass;
}

console.log(generatePseudoRandomPass(process.argv.slice(2)[0] || 20));