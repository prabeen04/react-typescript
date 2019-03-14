import * as React from 'react'
import TextInput from './TextInput';

export default function Form(): JSX.Element {
    const [task, setTask] = React.useState<string>('')
    const [tasks, setTasks] = React.useState<string[]>([])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setTask(e.target.value)
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        let newTasks = [...tasks, task]
        setTasks(newTasks)
    }
    return (
        <>
            <h2>Form component</h2>
            <form onSubmit={handleSubmit}>
                <TextInput
                    name='task'
                    placeholder='Enter task'
                    onChange={handleChange}
                    value={task}
                />
                <button>Add</button>
            </form>
        </>
    )
}

