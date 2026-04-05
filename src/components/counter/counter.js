import { useState } from 'react';
import './counter.css';


function Counter() {
    const [counter, setCounter] = useState(0);

    function handleDecrement() {
        setCounter((value) => {
            if(value === 0) return value
            return value - 1;
        });
    }

    function handleIncrement() {
        console.log(counter);
        setCounter(counter + 1);
    }

    function handleOnChange(event) {
        console.log(event);
        setCounter(parseInt(event.target.value));
    }

    return (
        <div className="counter-container">
            <div className="decrement">
                <button onClick={handleDecrement}>Decrement</button>
            </div>

            <div className="input-box">
                <input type='number' id='counter-box' value={counter} onChange={(event) => handleOnChange(event)}/>
            </div>

            <div className="increment">
                <button onClick={handleIncrement}>Increment</button>
            </div>
        </div>
    )
}

export default Counter;