import * as React from 'react'
import { ITodo } from './Form'
import TodoItem from "./TodoItem";
export interface ITodoListProps {
    todos: ITodo[];
    deleteTodo: (todo: ITodo) => void
    toggleTodo: (todo: ITodo) => void
}
export default function TodoList(props: ITodoListProps): JSX.Element {
    const { todos } = props
    return (
        <ul className='list-group list-group-flush'>
            {
                !!todos && todos.map((todo: ITodo) => <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={props.deleteTodo}
                    toggleTodo={props.toggleTodo}
                />)
            }
        </ul>
    )
}
