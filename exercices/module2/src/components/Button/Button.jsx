const Button = ({ changeCount, text, delta }) => {
    const handleClick = (e) => {
        const deltaAttribute = e.target.dataset.delta;
        const delta = parseInt(deltaAttribute);

        changeCount(delta);
    }

    return (
        <button onClick={handleClick} data-delta={delta}>{text}</button>
    )
}
export default Button;