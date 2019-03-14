import * as React from 'react'

export interface ITodoListProps {
    tasks: string[];
}
export default function TodoList(props: ITodoListProps): JSX.Element {
    const { tasks } = props
    return (
        <div>
            {
                !!tasks && tasks.map((task: string, i: number) => <p key={i}>{task}</p>)
            }
        </div>
    )
}
