import { Input } from "./Input"
import { Button } from "./Button"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormElement () {
    const [isPassword, setIsPassword] = useState("text")
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    function onChangeHandler(value) {
        console.log("Input value ", value)
        setValue(value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log("form data ", value);
        if(value) {
            navigate('/play', {state: {wordValue: value}})
        }
        setValue("");
    }

    function onToggleButton() {
        setIsPassword(isPassword === "password" ? "text" : "password");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <Input onChangeHandler={onChangeHandler} type={isPassword} value={value}/>
            </div>
            <div>
                <Button
                    style="primary"
                    text={isPassword === "password" ? "Show" : "Hide"}
                    type="button"
                    onClickHandler={onToggleButton}
                />
            </div>
            <div>
                <Button
                    type="submit"
                    style="warning"
                    text="Submit"
                />
            </div>
        </form>
    );
}
