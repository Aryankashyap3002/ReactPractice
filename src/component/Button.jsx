import { ButtonContainer } from "./ButtonContainer";

export function Button({ text = 'click', style = "danger" }) {
    return (
        <button className={`w-25 h-9 rounded-md m-5 ${ButtonContainer(style)} text-black`}>
            {text}
        </button>
    );
}
