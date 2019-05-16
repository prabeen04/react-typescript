import * as React from 'react'

export interface ITextareaProps {
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
    style?: object;
    rows?: number;
}
export default function Textarea(props: ITextareaProps) {
    const { name, value, placeholder, onChange, rows,  ...rest } = props;
    return (
        <>
            <textarea
                data-test='Textarea'
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
                rows={rows || 5}
            />
        </>
    )
}
