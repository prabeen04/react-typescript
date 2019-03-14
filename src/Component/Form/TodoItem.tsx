import * as React from 'react'
import { ITodo } from "./Form";

export default function TodoItem({ todo }: { todo: ITodo }): JSX.Element {
    return (
        <div>
            <span>
                <span>{todo.title}</span>
                <button>X</button>
            </span>
        </div>
    )
}
