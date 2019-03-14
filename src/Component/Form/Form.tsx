import * as React from 'react'
import TextInput from './TextInput';
import TodoList from './TodoList'

export interface ITodo{
    
}
export default function Form(): JSX.Element {
    const [todo, setTodo] = React.useState<string>('')
    const [todos, setTodos] = React.useState<string[]>([])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setTodo(e.target.value)
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        let newTodos = [...todos, todo]
        setTodos(newTodos)
        setTodo('')
    }
    return (
        <>
            <h2>Form component</h2>
            <form onSubmit={handleSubmit}>
                <TextInput
                    name='todo'
                    placeholder='Enter todo'
                    onChange={handleChange}
                    value={todo}
                />
                <button>Add</button>
                <TodoList todos={todos} />
            </form>
        </>
    )
}

