import { Link, useLocation } from "react-router-dom";
import { ListGuessWord } from "../GuessWordUtility/ListGuessedWord";
import { Alphabets } from "../Alphabets/Alphabet";
import { useState } from "react";
import { StagesOfGame } from "../Images/StagesOfGame";

export function PlayGame() {
    const { state } = useLocation();
    const [guessedWord, setGussedWord] = useState([]);
    const [level, setLevel] = useState(0);

    const originalWordList = state.wordValue.toUpperCase().split('');

    const originalWordSet = new Set(originalWordList);

    function handleAlphabtes(letter) {
        console.log("Letter is clicked ", letter); 
        setGussedWord([...guessedWord, letter]);
        if(!originalWordSet.has(letter)) {
            setLevel(level + 1);
        }
        
    }

    return (
        <>
            <h1>Play Game {state.wordValue}</h1>
            <div>
                <ListGuessWord originalWord={state.wordValue} guessedWord={guessedWord} />
            </div>
            <div>
                <Alphabets originalWord={state.wordValue} guessedWord={guessedWord} onLetterClick={handleAlphabtes} />
            </div>
            <div>
                <StagesOfGame level={level}/>
            </div>
            <Link to="/start" className="text-blue-700">Back to start page</Link>
        </>
    );
}