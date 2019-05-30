import * as React from 'react'
import { IError } from "./interface";
import './style.css';

export default function Empty(props: IError): JSX.Element {
  const { description, image, children, ...rest } = props;
  return (
    <div className='error-wrapper'>
      <i className="fas fa-bug"></i>
      <p>{description || 'Some error occoured'}</p>
    </div>
  )
}
