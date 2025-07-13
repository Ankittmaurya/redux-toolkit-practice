import { addTodo } from "@/features/todo/todoSlice";
import { Box, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TodoForm =memo(()=>{
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const handleAdd =()=> {
        dispatch(addTodo(inputValue));
        setInputValue('')
    }
    return(
        <Box className="p-5 border border-solid border-[#ddd] rounded-xl max-w-xl">
            <h2 className="text-center text-3xl font-semibold mb-5">Add todo item</h2>
            <Input type="text" placeholder="Enter todo text" value={inputValue} className="mb-3" onChange={(e)=>setInputValue(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key === 'Enter'){
                        handleAdd()
                    }
                }}
            />
            <div className="flex justify-end">
                <Button onClick={handleAdd} className="w-full">Add item</Button>
            </div>
        </Box>
    )
})