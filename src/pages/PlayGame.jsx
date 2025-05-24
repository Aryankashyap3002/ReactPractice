import { Link, useLocation } from "react-router-dom"
import { ListGuessWord } from "../GuessWordUtility/ListGuessedWord";

export function PlayGame () {

    const { state } = useLocation();

    return (
        <>
            <h1>Play Game {state.wordValue}</h1>
            <ListGuessWord originalWord={state.wordValue} guessedWord={['h','m']}/>
            <Link to="/start" className="text-blue-700" >Back to start page</Link>
        </>

    )
}

