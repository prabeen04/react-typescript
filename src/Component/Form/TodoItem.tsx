import * as React from 'react'
import { ITodo } from "./Form";

export default function TodoItem({ todo, deleteTodo }: { todo: ITodo, deleteTodo: (todo: ITodo) => void }): JSX.Element {
    return (
        <div>
            <span>
                <span>{todo.title}</span>
                <button onClick={() => deleteTodo(todo)}>X</button>
            </span>
        </div>
    )
}
