import * as React from 'react'
import { ITodo } from "./Todo";
import ViewEdit from "../../Hooks/ViewEdit";
import TextInput from "./TextInput";
export default function TodoItem(
    { todo, deleteTodo, toggleTodo, updateTodo }
        : {
            todo: ITodo,
            deleteTodo: (todo: ITodo) => void,
            toggleTodo: (todo: ITodo) => void,
            updateTodo: (todo: ITodo, index: string) => void,
        }): JSX.Element {
    const { viewType, toggleViewType } = ViewEdit()
    const [title, setTitle] = React.useState<string>(todo.title)
    return (
        <div className={`todo-list-group-item ${todo.isCompleted ? 'completed-todo' : ''}`}>
            {
                viewType === 'view'
                    ? <span className='todo-view'>
                        <span
                            onClick={() => toggleTodo(todo)}
                            style={{
                                fontSize: 24,
                                color: todo.isCompleted ? 'rgb(1, 102, 63)' : '#f23a21',
                                textDecoration: todo.isCompleted ? 'line-through' : 'none',
                            }}>
                            {todo.title}</span>
                        <span>
                            <button className='btn btn-warning yellow' onClick={() => toggleTodo(todo)}>
                            {todo.isCompleted 
                                ? <i className="fas fa-fingerprint"></i>
                                : <i className="fas fa-lock"></i>
                                }
                            </button>&nbsp;
                            <button className='btn btn-secondary sky-blue' onClick={toggleViewType}> <i className="fas fa-edit"></i></button>&nbsp;
                          <button className='btn btn-danger' onClick={() => deleteTodo(todo)}> <i className="fas fa-trash-alt"></i></button>
                        </span>
                    </span>
                    : <span className='todo-edit'>
                        <TextInput
                            className='dark-input'
                            name=''
                            onChange={({ target: { value } }) => setTitle(value)}
                            value={title}
                            style={{ width: 400 }}
                        />
                        <span>

                            <button
                                className='btn btn-primary'
                                onClick={() => {
                                    updateTodo(todo, title)
                                    toggleViewType()
                                }}>
                                <i className="fas fa-paper-plane"></i>
                                </button>&nbsp;
                            <button className='btn btn-danger' onClick={toggleViewType}>
                            <i className="fas fa-times"></i>
                            </button>
                        </span>
                    </span>
            }

        </div>
    )
}
