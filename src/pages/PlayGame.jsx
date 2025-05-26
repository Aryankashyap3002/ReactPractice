import { Link } from "react-router-dom";
import { ListGuessWord } from "../GuessWordUtility/ListGuessedWord";
import { Alphabets } from "../Alphabets/Alphabet";
import { useContext, useState } from "react";
import { StagesOfGame } from "../Images/StagesOfGame";
import { WordContext } from "../Context/wordContext";

export function PlayGame() {
    // const { state } = useLocation();
    const {words} = useContext(WordContext);
    const [guessedWord, setGussedWord] = useState([]);
    const [level, setLevel] = useState(0);

    console.log(words);

    const originalWordList = words.toUpperCase().split('');

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
            <h1>Play Game</h1>
            <div>
                <ListGuessWord originalWord={words} guessedWord={guessedWord} />
            </div>
            <div>
                <Alphabets originalWord={words} guessedWord={guessedWord} onLetterClick={handleAlphabtes} />
            </div>
            <div>
                <StagesOfGame level={level}/>
            </div>
            <Link to="/start" className="text-blue-700">Back to start page</Link>
        </>
    );
}