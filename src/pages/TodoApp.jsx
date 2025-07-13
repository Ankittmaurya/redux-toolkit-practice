
import { TodoForm } from "@/components/todo/TodoForm";
import { removeTodo, toggleTodo, updateTodo } from "@/features/todo/todoSlice";
import { Badge, Button, Input, InputGroup, Menu, Portal, Select, Table, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

export const TodoApp =()=>{
    const todoList = useSelector((state)=>state.todo.todos);
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [statusFilter, setStatusFilter] = useState('')
    const [editable, setEditable] = useState(false);
    const [editData, setEditData] = useState({
        id:null,
        text:'',
        completed: false
    })
    const handleEdit =(id,currentText)=>{
        setEditable(true);
        setEditData({
            ...editData,
            id:id,
            text:currentText
        })
    }
    const handleSave =(e)=> {
        if(editData.text.trim()){
            dispatch(updateTodo(editData))
            setEditable(false);
            setEditData({
                id:null,
                text:'',
                completed: false
            })
        }
    }
    const filteredTodos = todoList.filter((todo)=> todo.text.toLowerCase().includes(searchText.toLowerCase()));
    const handleStatusChange =(e)=> {
        setStatusFilter(e.value);
        console.log('status',statusFilter);
    }
    console.log('status',statusFilter);
    return(
        <div className="flex flex-wrap items-stretch min-h-screen">
            <div className="w-full md:w-1/2 p-5">
                <TodoForm />
            </div> 
            <div className="w-full md:w-1/2 p-5 border-l border-solid border-[#ddd] ">
                <div className="p-5 bg-[#f9f9f9] rounded-lg pb-8">
                    <div className="mb-4 bg-white p-2 flex flex-wrap items-stretch gap-4">
                        <InputGroup flex="1" startElement={<LuSearch />}>
                            <Input placeholder="Search tasks" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                        </InputGroup>
                        <div className="flex-auto">
                            <Select.Root size="sm" width="100%" maxW={'100px'} h={'100%'}
                            value={statusFilter}
                                onValueChange={(e)=>setStatusFilter(e.value)}
                            >
                                <Select.HiddenSelect />
                                    <Select.Control>
                                        <Select.Trigger>
                                        <Select.ValueText placeholder="Filter" />
                                        </Select.Trigger>
                                        <Select.IndicatorGroup>
                                        <Select.Indicator />
                                        </Select.IndicatorGroup>
                                    </Select.Control>
                                    <Portal>
                                        <Select.Positioner>
                                        <Select.Content>
                                            <Select.Item item={'Pending'}>Pending</Select.Item>
                                            <Select.Item item={'Completed'}>Completed</Select.Item>
                                        </Select.Content>
                                        </Select.Positioner>
                                    </Portal>
                            </Select.Root>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-md shadow-md">
                        <Table.ScrollArea borderWidth="1px" rounded="md">
                        <Table.Root size="sm" interactive stickyHeader>
                            <Table.Header>
                                <Table.Row bg="bg.subtle">
                                    <Table.ColumnHeader>S.No.</Table.ColumnHeader>
                                    <Table.ColumnHeader>Task</Table.ColumnHeader>
                                    <Table.ColumnHeader>Status</Table.ColumnHeader>
                                    <Table.ColumnHeader textAlign="end">Action</Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {todoList.length > 0 && filteredTodos.length === 0 && searchText && (
                                <Table.Row>
                                    <Table.Cell colSpan={4}>
                                        <Text className="p-10 text-center text-red-500">
                                        No task found for "{searchText}"
                                        </Text>
                                    </Table.Cell>
                                </Table.Row>
                                )}
                                {todoList.length > 0 ? (
                                filteredTodos.map((item,index) => (
                                <Table.Row key={item.id} id={item.id}>
                                    <Table.Cell>{index +1}</Table.Cell>
                                    <Table.Cell>
                                        {
                                            editable && editData.id === item.id ?
                                            <div className="flex gap-2">
                                                <Input 
                                                maxW={'300px'} 
                                                type="text" 
                                                value={editData.text} 
                                                onChange={(e)=>setEditData({...editData, text:e.target.value})}
                                                onKeyDown={(e)=>{
                                                    if(e.key==='Enter'){
                                                        handleSave()
                                                    }
                                                }}
                                                />
                                                <Button
                                                    onClick={()=>{
                                                        setEditData({
                                                            id: null,
                                                            text:''
                                                        })
                                                        setEditable(false)
                                                    }}
                                                >Cancel</Button>
                                                <Button onClick={handleSave}>Save</Button>
                                            </div>
                                            :
                                            <>
                                            {item.text}
                                            </>
                                        }
                                        
                                    </Table.Cell>
                                    <Table.Cell>{item.completed ?
                                        <Badge colorPalette="green">Completed</Badge>
                                        :
                                        <Badge colorPalette="red">Pending</Badge>
                                        }
                                    </Table.Cell>
                                    <Table.Cell textAlign="end">
                                        <Menu.Root>
                                            <Menu.Trigger asChild>
                                                <Button variant="outline" size="sm">
                                                    Action
                                                </Button>
                                            </Menu.Trigger>
                                        <Portal>
                                            <Menu.Positioner>
                                            <Menu.Content>
                                                <Menu.Item onClick={(e)=>handleEdit(item.id, item.text)}>Edit</Menu.Item>
                                                <Menu.Item value="completed" onClick={()=>dispatch(toggleTodo(item.id))}>
                                                    {item.completed? 'Pending': 'completed'}
                                                </Menu.Item>
                                                <Menu.Item value="delete" onClick={()=>{
                                                    dispatch(removeTodo(item.id));
                                                }}>Delete</Menu.Item>
                                            </Menu.Content>
                                            </Menu.Positioner>
                                        </Portal>
                                        </Menu.Root>
                                    </Table.Cell>
                                </Table.Row>
                                )))
                                    :
                                    <Table.Row>
                                        <Table.Cell colSpan={4}><Text className="p-10 text-center">No task added yet</Text></Table.Cell>
                                    </Table.Row>
                                }
                                
                            </Table.Body>
                            </Table.Root>
                        </Table.ScrollArea>
                    </div>
                </div>
            </div>
        </div>
    )
}