import { ButtonContainer } from "./ButtonContainer";

export function Button({ text = 'click', style = "danger", type="button", onClickHandler }) {
    return (
        <button 
            type={type}
            className={`w-25 h-9 rounded-md mt-2 mx-3 ${ButtonContainer(style)} text-black`}
            onClick={onClickHandler}
            >
            {text}
        </button>
    );
}
