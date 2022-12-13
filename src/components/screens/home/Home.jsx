import React, {useState} from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./CreateTodoField/CreateTodoField";

const data = [
    {
        id: '1',
        title: 'test',
        isCompleted: false,
    },

]

const Home = () => {
    const [todos, setTodos] = useState(data)

     const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(todot => todot.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
     }

    const removeTodo = (id) => {

        setTodos([...todos].filter(todot => todot.id !== id))
    }



    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-5xl font-bold text-center mb-8 '>todo</h1>

            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
                ))
            }
            <CreateTodoField setTodos={setTodos}/>
        </div>
    )
}

export default Home