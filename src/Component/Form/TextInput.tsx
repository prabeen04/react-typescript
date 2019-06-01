import * as React from 'react'

export interface ITextInputProps {
    value?: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    style?: object
}
export default function TextInput(props: ITextInputProps) {
    const { name, value, defaultValue, placeholder, onChange, ...rest } = props;
    return (
        <>
            <input
                data-test='TextInput'
                name={name}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
        </>
    )
}
