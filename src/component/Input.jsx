export function Input({ type="text", placeholder="Enter the word here...", onChangeHandler, value }) {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChangeHandler(e.target.value)}
            className="w-70 h-10 m-5 p-5 border border-black "
        />
    );
}
