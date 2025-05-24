export function getMaskedArray(originalWord, guessedWord) {
    const guessedWordSet = new Set(guessedWord.map(letter => letter.toUpperCase()));
    const originalWordList = originalWord.toUpperCase().split('');

    const result = originalWordList.map(letter => {
        return guessedWordSet.has(letter) ? letter : '_';
    });

    return result;
}
