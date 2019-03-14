import * as React from 'react'
import { ITodo } from './Form'
import TodoItem from "./TodoItem";
export interface ITodoListProps {
    todos: ITodo[];
    deleteTodo: (todo: ITodo) => void
}
export default function TodoList(props: ITodoListProps): JSX.Element {
    const { todos } = props
    return (
        <div>
            {
                !!todos && todos.map((todo: ITodo) => <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={props.deleteTodo} />)
            }
        </div>
    )
}
