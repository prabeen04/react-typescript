import * as React from 'react'
import TextInput from './TextInput';
import TodoList from './TodoList'

export interface ITodo {
    title: string;
    isCompleted: boolean;
}
export default function Form(): JSX.Element {
    const [todo, setTodo] = React.useState<string>('')
    const [todos, setTodos] = React.useState<ITodo[]>([])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setTodo(e.target.value)
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        let newTodos = [...todos, { title: todo, isCompleted: false }]
        setTodos(newTodos)
        setTodo('')
    }
    function deleteTodo(todo: ITodo, index: number) {
        console.log(todo)
        let newTodos = [...todos]
        let newArr = newTodos.filter((todo, i) => {
            if (i !== index) {
                return todo
            } else {
                return null
            }
        })
        setTodos(newArr)
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
                <button disabled={!todo}>Add</button>
                <TodoList todos={todos} deleteTodo={deleteTodo} />
            </form>
        </>
    )
}

