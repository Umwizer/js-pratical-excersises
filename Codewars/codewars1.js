// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
function sameCase(char1, char2) {
    if (!isLetter(char1) || !isLetter(char2)) {
        return -1;
    }
    if ((isUpperCase(char1) && isUpperCase(char2)) || (isLowerCase(char1) && isLowerCase(char2))) {
        return 1;
    }
    return 0;
}

function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
}

function isUpperCase(char) {
    return char === char.toUpperCase();
}

function isLowerCase(char) {
    return char === char.toLowerCase();
}