import "./square.css"

const Square = (props) => {
    let i = 0;
    const handleClick = () => 
        {
            i++;
            console.log(i, Date.now);
        }
    let extraClass = props.value === "0" ? "zero" : "cross";
    let classN = `square ${extraClass}`;

    return (
    <button 
        className={classN}
        onClick={handleClick}
        >
            {i}
        </button>
    );
}

export default Square;