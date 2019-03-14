import * as React from 'react'
import { ITodo } from './Form'
export interface ITodoListProps {
    todos: ITodo[];
}
export default function TodoList(props: ITodoListProps): JSX.Element {
    const { todos } = props
    return (
        <div>
            {
                !!todos && todos.map((todo: ITodo, i: number) => <p key={i}>{todo.title}</p>)
            }
        </div>
    )
}
