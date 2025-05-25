import { Button } from "../component/Button";

const ALPHABETS = 'qwertyuiopasdfghjklzxcvbnm';

export function Alphabets({ originalWord, guessedWord,  onLetterClick }) {


    const letters = ALPHABETS.toUpperCase().split('');

    const originalWordList = originalWord.toUpperCase().split('');

    const originalWordSet = new Set(originalWordList);
    const gussedWordSet = new Set(guessedWord);

    function buttonStyle (letter) {
        if(gussedWordSet.has(letter)) {
            return `${originalWordSet.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
        } else {
            return 'bg-blue-500';
        }
    }

    function handleOnClick (event) {
        onLetterClick?.(event.target. value);
    }

    
    const buttons = letters.map((letter) => {
        return (
            <button
                key={`${letter}`}
                onClick={handleOnClick}
                value={letter}
                disabled={gussedWordSet.has(letter)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        )
    })


    return (
        <div>
            {buttons}
        </div>
        
    )
}