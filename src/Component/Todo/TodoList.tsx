import * as React from 'react'
import { ITodo } from './Todo'
import TodoItem from "./TodoItem";
export interface ITodoListProps {
    todos: ITodo[];
    deleteTodo: (todo: ITodo) => void;
    toggleTodo: (todo: ITodo) => void;
    updateTodo: (todo: ITodo, newTodo: string) => void;
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
                    updateTodo={props.updateTodo}
                />)
            }
        </ul>
    )
}
