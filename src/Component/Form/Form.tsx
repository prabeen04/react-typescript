import * as React from 'react'
import TextInput from './TextInput';
import TodoList from './TodoList'

export interface ITodo {
    title: string;
    isCompleted: boolean;
    id: number;
}
export default function Form(): JSX.Element {
    const [todo, setTodo] = React.useState<string>('')
    const [todos, setTodos] = React.useState<ITodo[]>([])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setTodo(e.target.value)
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        let newTodos = [...todos, { title: todo, isCompleted: false, id: Date.now() }]
        setTodos(newTodos)
        setTodo('')
    }
    function deleteTodo(todo: ITodo) {
        let newTodos = [...todos]
        let newArr = newTodos.filter((singleTodo: ITodo) => singleTodo.id !== todo.id)
        console.log(newArr)
        setTodos(newArr)
    }
    return (
        <>
            <h2>Form component</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                        name='todo'
                        placeholder='Enter todo'
                        onChange={handleChange}
                        value={todo}
                        className='form-control'
                        style={{width: 400}}
                    />
                    <button className='btn btn-success' disabled={!todo}>Add</button>
                </div>
                <TodoList todos={todos} deleteTodo={deleteTodo} />
            </form>
        </>
    )
}

