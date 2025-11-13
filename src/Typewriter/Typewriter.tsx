import { useRef, useState } from "react"
import useTypewriter from "./useTypewriter"

export default function Typewriter(){
    const [input, setInput] = useState("")
    const typedText = useTypewriter(input, 100)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        if(inputRef.current){
            setInput(inputRef.current.value)
        }
    }

    return(
        <div id="useTypewriter" className="container">
            <h2>useTypewriter</h2>
            <input ref={inputRef} type='text' name="input"></input>
            <button onClick={handleSubmit}>Submit</button>

            <p>{typedText}</p>
        </div>
    )
}