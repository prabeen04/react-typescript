import * as React from 'react';

export interface SelectInputInputProps {
  value?: string | number;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: any;
  defaultValue?: any;
  placeholder?: string;
  className?: string;
  style?: object;
}
export default function SelectInputInput(props: SelectInputInputProps): any {
  const {
    name,
    value,
    placeholder,
    onChange,
    options,
    defaultValue,
    ...rest
  } = props;
  return (
    <>
      <select
        data-test="SelectInputInput"
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      >
        {options &&
          options.map((option: any, i: number): any => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </>
  );
}
