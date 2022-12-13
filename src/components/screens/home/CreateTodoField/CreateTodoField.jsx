import React, {useState} from "react";

const CreateTodoField = ({setTodos}) => {

    const [title, setTitle] = useState('')

    const addTodo = title => {
        setTodos(prev => [
            {
            id: new Date(),
            title: title,
            isCompleted: false
        },
            ...prev])
        setTitle('')
    }

    return (
        <div className='flex items-center justify-between mb-5 border-2 rounded-2xl px-5 bg-gray-700 p-5 w-full mt-20'>
            <input type='text'
                   onChange={event => setTitle(event.target.value)}
                   value={title}
                   onKeyPress={event => event.key === 'Enter' && addTodo(title)}
                   className='bg-transparent w-full border-none outline-none'
                   placeholder='enter your task'
            />
        </div>
    )
}

export default CreateTodoField