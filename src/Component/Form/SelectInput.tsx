import * as React from 'react'

export interface ISelectInputInputProps {
    value: string | number;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    className?: string;
    options: any;
    style?: object
}
export default function SelectInputInput(props: ISelectInputInputProps) {
    const { name, value, placeholder, onChange, options, ...rest } = props;
    return (
        <>
            <select
                data-test='SelectInputInput'
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            >
                {options && options.map((option: any, i: number) => <option key={i} value={option.value}>{option.label}</option>)}
            </select>
        </>
    )
}
