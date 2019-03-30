import * as React from 'react';
import { useSpring, animated } from 'react-spring';
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
    const styles = useSpring({ opacity: 1, transform: 'translate3d(0px,0,0) ', from: { opacity: 0, transform: 'translate3d(0,200px,0) ', } })
    
    return (
        <animated.div style={styles}>
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
                            <span className='todo-view-btn-group'>
                                <button className='btn btn-warning yellow' onClick={() => toggleTodo(todo)}>
                                    {todo.isCompleted
                                        ? <i className="fas fa-fingerprint"></i>
                                        : <i className="fas fa-lock"></i>
                                    }
                                </button>
                            <button className='btn btn-secondary sky-blue' onClick={toggleViewType}> <i className="fas fa-edit"></i></button>
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
                            <span className='todo-edit-btn-group'>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => {
                                        updateTodo(todo, title)
                                        toggleViewType()
                                    }}>
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            <button className='btn btn-danger' onClick={toggleViewType}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </span>
                        </span>
                }

            </div>
        </animated.div>
    )
}
