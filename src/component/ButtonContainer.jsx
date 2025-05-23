export function ButtonContainer(style) {
    if (style === "primary") {
        return "bg-blue-500";
    } else if (style === "warning") {
        return "bg-green-500";
    } else if (style === "danger") {
        return "bg-red-500";
    } else {
        return "bg-gray-500"; // fallback/default
    }
}
