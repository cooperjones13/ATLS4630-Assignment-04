import { useState } from "react";
import usePrevious from "./usePrevious";


export default function Previous(){
    const [count, setCount] = useState(1);
    const prevCount = usePrevious(count)

    return(
        <div id="usePreviousContainer" className="container">
            <h2>usePrevious</h2>
            <p>Current: {count}</p>
            <p>Previous: {prevCount}</p>
            <button onClick={()=>{setCount(c => c+1)}}>Increment Counter!</button>
        </div>
    )
}