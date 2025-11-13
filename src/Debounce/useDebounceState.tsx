import {useRef, useState } from "react";

export default function useDebounceState(initVal:string, debounceTime:number){ //Takes in an initial string and a debounce time in milliseconds
    const [value,setValue] = useState(initVal)
    const ref = useRef<number>(undefined)

    function setValueDebounced(newVal:string){
        if(ref.current){ //if there is already a timeout going, clear it
            console.log(`Timeout (id: ${ref.current}) cleared`)
            clearTimeout(ref.current)
        }
        //Create timeout
        ref.current = setTimeout(()=>{
                setValue(newVal) //update state
                console.log(`Timeout (id: ${ref.current}) complete - Value is now: ${newVal}`)
                ref.current = undefined; //set timeout ref to undefined so its ready to run again on change
            },debounceTime)
        console.log(`New Timeout (id: ${ref.current}) set for ${debounceTime}ms - new value will be: ${newVal}`)
        
        
        
    }

    return {value, setValueDebounced}

}