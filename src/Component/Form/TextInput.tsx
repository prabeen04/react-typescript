import * as React from 'react'

interface ITextInputProps {
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
export default function TextInput(props: ITextInputProps) {
    const { value, placeholder, onChange } = props;
    return (
        <div>
            <input
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}
