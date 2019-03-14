import * as React from 'react'
import { ITodo } from './Form'
import TodoItem from "./TodoItem";
export interface ITodoListProps {
    todos: ITodo[];
}
export default function TodoList(props: ITodoListProps): JSX.Element {
    const { todos } = props
    return (
        <div>
            {
                !!todos && todos.map((todo: ITodo, i: number) => <TodoItem key={i} todo={todo} />)
            }
        </div>
    )
}
