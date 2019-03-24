import * as React from 'react'
import TextInput from './TextInput';
import TodoList from './TodoList'

export interface ITodo {
    title: string;
    isCompleted: boolean;
    id: number;
}
export type InputElem = React.ChangeEvent<HTMLInputElement>
export type FormElem = React.FormEvent<HTMLFormElement>

export default function Todo(): JSX.Element {
    const [todo, setTodo] = React.useState<string>('')
    const [todos, setTodos] = React.useState<ITodo[]>([])

    function handleChange(e: InputElem): void {
        setTodo(e.target.value)
    }
    function handleSubmit(e: FormElem): void {
        e.preventDefault()
        let newTodos = [...todos, { title: todo, isCompleted: false, id: Date.now() }]
        setTodos(newTodos)
        setTodo('')
    }
    function deleteTodo(todo: ITodo): void {
        let newTodos = [...todos]
        let newArr = newTodos.filter((singleTodo: ITodo) => singleTodo.id !== todo.id)
        setTodos(newArr)
    }
    function toggleTodo(todo: ITodo): void {
        let newTodos = [...todos]
        let newArr = newTodos.map((singleTodo: ITodo) => {
            if (singleTodo.id === todo.id) {
                return { ...singleTodo, isCompleted: !singleTodo.isCompleted }
            } else {
                return singleTodo
            }
        })
        setTodos(newArr)
    }
    function updateTodo(todo: ITodo, newTodo: string): void {
        console.log('object')
        let newTodos = [...todos]
        let newArr = newTodos.map((singleTodo: ITodo) => {
            if (singleTodo.id === todo.id) {
                return { ...singleTodo, title: newTodo }
            } else {
                return singleTodo
            }
        })
        setTodos(newArr)
    }
    return (
        <>
            <form onSubmit={handleSubmit} data-test='Todo'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                        name='todo'
                        placeholder='Enter todo'
                        onChange={handleChange}
                        value={todo}
                        className='form-control'
                        style={{ width: 400 }}
                    />&nbsp;&nbsp;
                    <button className='btn btn-success' disabled={!todo}>Add</button>
                </div>
            </form>
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                updateTodo={updateTodo}
            />
        </>
    )
}

