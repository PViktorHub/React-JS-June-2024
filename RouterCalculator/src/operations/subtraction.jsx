import { useParams } from "react-router-dom";

export const Subtraction = () => {

    const {element1, element2} = useParams();


    return (
        <>
            <h1>Addition</h1>
            <p>{`${element1} - ${element2} = ${element1 - element2}` }</p>
        </>
    );
};