import { Link, useLocation } from "react-router-dom";
import { ListGuessWord } from "../GuessWordUtility/ListGuessedWord";
import { Alphabets } from "../Alphabets/Alphabet";
import { useState } from "react";

export function PlayGame() {
    const { state } = useLocation();
    const [guessedWord, setGussedWord] = useState([]);



    function handleAlphabtes(letter) {
        console.log("Letter is clicked ", letter); 
        setGussedWord([...guessedWord, letter]);
    }

    return (
        <>
            <h1>Play Game {state.wordValue}</h1>
            <ListGuessWord originalWord={state.wordValue} guessedWord={guessedWord} />
            <Alphabets originalWord={state.wordValue} guessedWord={guessedWord} onLetterClick={handleAlphabtes} />
            <Link to="/start" className="text-blue-700">Back to start page</Link>
        </>
    );
}