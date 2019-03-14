import * as React from 'react'
import { ITodo } from "./Form";

export default function TodoItem({ todo, index, deleteTodo }: { todo: ITodo, index: number, deleteTodo: (todo: ITodo, index: number) => void }): JSX.Element {
    return (
        <div>
            <span>
                <span>{todo.title}</span>
                <button onClick={() => deleteTodo(todo, index)}>X</button>
            </span>
        </div>
    )
}
