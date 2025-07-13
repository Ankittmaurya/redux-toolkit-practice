import { decrement, increment } from "@/features/counter/counterSlice";
import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter =()=>{
    const dispatch = useDispatch();
    const count = useSelector((state)=> {
        return state.counter?.value??0; 
    });
    return(
        <div className="p-10">
            
            <HStack>
                <Button 
                disabled={count < 1 ? true : false}
                onClick={()=>dispatch(decrement())}
                >-</Button>
                <h2 className="text-3xl font-bold">Count value {count}</h2>
                <Button 
                disabled={count > 9 ? true : false}
                onClick={()=>dispatch(increment())}>+</Button>
            </HStack>
        </div>
    )
}