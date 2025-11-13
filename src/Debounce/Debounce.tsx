import { useRef} from "react"
import useDebounceState from "./useDebounceState"

export default function Debounce(){
    const {value, setValueDebounced} = useDebounceState("", 2000)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        if(inputRef.current){
            setValueDebounced(inputRef.current.value)
        }
    }

    return(
        <div id="useDebounceState" className="container">
            <h2>useDebounceState</h2>
            <input ref={inputRef} type='text' name="input"></input>
            <button onClick={handleSubmit}>Submit</button>

            <p>{value}</p>
        </div>
    )
}