import * as React from 'react'
import { ITodo } from "./Form";
import ViewEdit from "../../Hooks/ViewEdit";
import TextInput from "../Form/TextInput";
export default function TodoItem(
    { todo, deleteTodo, toggleTodo }
        : {
            todo: ITodo,
            deleteTodo: (todo: ITodo) => void,
            toggleTodo: (todo: ITodo) => void,
        }): JSX.Element {
    const { viewType, toggleViewType } = ViewEdit()
    return (
        <li className='list-group-item'>
            {
                viewType === 'view'
                    ? <span>
                        <span
                            onClick={() => toggleTodo(todo)}
                            style={{
                                fontSize: 24,
                                color: todo.isCompleted ? 'red' : 'green',
                                textDecoration: todo.isCompleted ? 'line-through' : 'none',
                            }}>
                            {todo.title}</span>&nbsp;
                    <button className='btn btn-default' onClick={toggleViewType}>Edit</button>&nbsp;
                    <button className='btn btn-danger' onClick={() => deleteTodo(todo)}>Delete</button>
                    </span>
                    : <span>
                        {/* <TextInput name='todo' onChange={() => { }} value='' /> */}
                        <button className='btn btn-default' onClick={toggleViewType}>Cancel</button>
                        <button className='btn btn-primary' onClick={() => null}>Update</button>
                    </span>
            }

        </li>
    )
}
