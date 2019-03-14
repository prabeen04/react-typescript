import * as React from 'react'
import { ITodo } from "./Form";

export default function TodoItem({
    todo, deleteTodo, toggleTodo }
    : {
        todo: ITodo,
        deleteTodo: (todo: ITodo) => void,
        toggleTodo: (todo: ITodo) => void,
    }): JSX.Element {
    return (
        <li className='list-group-item'>
            <span>
                <span onClick={() => toggleTodo(todo)} style={{ color: todo.isCompleted ? 'red' : 'green' }}>{todo.title}</span>&nbsp;
                <button className='btn btn-danger' onClick={() => deleteTodo(todo)}>X</button>
            </span>
        </li>
    )
}
