import * as React from 'react'
import { ITodo } from './Form'
import TodoItem from "./TodoItem";
export interface ITodoListProps {
    todos: ITodo[];
    deleteTodo: (todo: ITodo, index: number) => void
}
export default function TodoList(props: ITodoListProps): JSX.Element {
    const { todos } = props
    return (
        <div>
            {
                !!todos && todos.map((todo: ITodo, i: number) => <TodoItem
                    key={i}
                    todo={todo}
                    index={i}
                    deleteTodo={props.deleteTodo} />)
            }
        </div>
    )
}
