import * as React from 'react'
import { IEmpty } from "./interface";
import './style.css';

export default function Empty(props: IEmpty): JSX.Element {
  const { description, image, children, ...rest } = props;
  return (
    <div className='empty-wrapper'>
      <i className="fas fa-box-open"></i>
      <p>{description || 'No data found'}</p>
    </div>
  )
}
