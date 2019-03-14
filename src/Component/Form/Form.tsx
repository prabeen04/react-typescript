import * as React from 'react'
import TextInput from './TextInput';

export default function Form() {
    const [task, setTask] = React.useState('')
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value)
    }
    return (
        <div>
            <h2>Form component</h2>
            <TextInput
                name='task'
                placeholder='Enter task'
                onChange={handleChange}
                value={task}
            />
        </div>
    )
}

