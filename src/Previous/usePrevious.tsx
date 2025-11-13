// A “usePrevious” hook that takes a piece of state, and returns whatever that state was on the previous render.

import { useRef, useEffect} from "react";

export default function usePrevious(value:number|string){
    const previousVal = useRef<number|string>("") // We dont want to rerender if the value changes

    useEffect(()=>{
        previousVal.current = value //store value on re-render
    }, [value])

    return previousVal.current

}