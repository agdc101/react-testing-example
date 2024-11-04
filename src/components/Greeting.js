import {useState} from "react";
import Output from "./Output";

const Greeting = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(!changeText);
    }

    return (
        <div className="greeting">
            <h2>Hello World!</h2>
            {!changeText && <Output>Good to be here</Output>}
            {changeText && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>change here</button>
        </div>
    )
}

export default Greeting;