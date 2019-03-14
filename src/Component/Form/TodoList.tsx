import * as React from 'react'

export interface ITodoListProps {
    todos: string[];
}
export default function TodoList(props: ITodoListProps): JSX.Element {
    const { todos } = props
    return (
        <div>
            {
                !!todos && todos.map((todo: string, i: number) => <p key={i}>{todo}</p>)
            }
        </div>
    )
}
