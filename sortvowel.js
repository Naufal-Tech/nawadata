function sortAlphabet(string) {
    string = string.toLowerCase()
    let vokalString = ''
    let konsonanString = ''
    let vokal = {
        a: "a", i: "i", u: "u", e: "e", o: "o"
    }
    for (let i = 0; i < string.length; i++) {
        if (vokal[string[i]]) {
            vokalString += string[i]
        } else if (!vokal[string[i]] && string[i] !== ' ') {
            konsonanString += string[i]
        }
    }
    console.log(`Vowel Characters :\n${vokalString}\nConsonant Characters :\n${konsonanString}`);
}

sortAlphabet('simple case')