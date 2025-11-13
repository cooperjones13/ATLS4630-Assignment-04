// A “usePrevious” hook that takes a piece of state, and returns whatever that state was on the previous render.

import { useRef, useEffect} from "react";

export default function usePrevious(value:number|string){
    const previousVal = useRef<number|string>("")

    useEffect(()=>{
        previousVal.current = value
    }, [value])

    return previousVal.current

}