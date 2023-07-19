function caesarCipher(s, k) {

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encrypted = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char.match(/[a-z]/i)) {
            const isLowerCase = char === char.toLowerCase();
            const shiftedIndex = (alphabet.indexOf(char.toLowerCase()) + k) % 26;
            const shiftedChar = alphabet[shiftedIndex];

            encrypted += isLowerCase ? shiftedChar : shiftedChar.toUpperCase();
        } else {
            encrypted += char;
        }
    }

    return encrypted;

}