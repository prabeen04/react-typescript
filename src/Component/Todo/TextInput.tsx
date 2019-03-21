import * as React from 'react'

export interface ITextInputProps {
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string
    style?: object
}
export default function TextInput(props: ITextInputProps) {
    const { name, value, placeholder, onChange, ...rest } = props;
    return (
        <>
            <input
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
        </>
    )
}
