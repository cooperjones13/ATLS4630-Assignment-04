import {useEffect, useRef, useState} from "react";
// import useDebounceState from "../Debounce/useDebounceState";
// import usePrevious from "../Previous/usePrevious";

export default function useTypewriter(newVal:string, debounceTime:number){ //Takes in an initial string and a debounce time in milliseconds
    const [displayedText,setDisplayedText] = useState("")
    const intervalRef = useRef<number>(undefined)

    useEffect(()=>{
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }

        let index = 0;
        intervalRef.current = setInterval(()=>{
            setDisplayedText(newVal.slice(0, index))
            index++
            if(index === newVal.length+1){
                clearInterval(intervalRef.current)
            }

        }, debounceTime)
    }, [newVal, debounceTime])





    

    return displayedText

}