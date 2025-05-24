import { getMaskedArray } from "./getMaskedArray";

export function ListGuessWord({ originalWord, guessedWord }) {
    const maskedWordList = getMaskedArray(originalWord, guessedWord);

    return (
        <div>
            {maskedWordList.map((ele, idx) => (
                <span key={idx} className="mx-1">{ele}</span>
            ))}
        </div>
    );
}
