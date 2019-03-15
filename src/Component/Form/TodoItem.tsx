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
            updateTodo: (todo: ITodo) => void,
        }): JSX.Element {
    const { viewType, toggleViewType } = ViewEdit()
    const [title, setTitle] = React.useState<string>(todo.title)
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
                    : <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            className='form-control'
                            name=''
                            onChange={({ target: { value } }) => setTitle(value)}
                            value={title}
                            style={{ width: 400 }}
                        />
                        <button className='btn btn-default' onClick={toggleViewType}>Cancel</button>
                        <button className='btn btn-primary' onClick={() => null}>Update</button>
                    </span>
            }

        </li>
    )
}
