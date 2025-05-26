import { Link } from "react-router-dom";
import { Button } from "../component/Button";
import { useEffect, useState } from "react";

export function Home () {

    const [value, setValue] = useState('');

    async function fetchWords() {
        const data = await fetch("http://localhost:3000/words");
        const response = await data.json();
        console.log(response);
        const random = Math.floor(Math.random() * response.length);
        setValue(response[random].wordValue);
        console.log(response[random].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, [])
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="space-x-4">
                <Link to="/play" state={{wordValue: value}}>
                    <Button style="primary" text="Single Player" />
                </Link>
                <Link to="/start">
                    <Button style="warning" text="Two Players" />
                </Link>
            </div>
        </div>
    )
}