import {useState} from "react";

const Greeting = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(!changeText);
    }

    return (
        <div className="greeting">
            <h2>Hello World!</h2>
            {!changeText && <p>Good to be here</p>}
            {changeText && <p>Changed!</p>}
            <button onClick={changeTextHandler}>change here</button>
        </div>
    )
}

export default Greeting;