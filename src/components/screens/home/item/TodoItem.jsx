import React from "react";
import Check from "./Check";
import cn from "classnames";
import {IoTrashBin} from "react-icons/io5";

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className='flex items-center justify-between mb-5 rounded-xl bg-gray-700 p-5 w-full'
        >

            <button className='flex items-center' onClick={() => changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted}/>
                <span className={cn({
                    'line-through': todo.isCompleted
                })}>{todo.title}</span>
            </button>


            <button onClick={() => removeTodo(todo.id)}>
                <IoTrashBin size={30}
                            className='text-orange-900 hover:text-purple-800 transition-colors easy-in-out duration-300'/>
            </button>

        </div>
    )
}

export default TodoItem