import * as React from 'react'
import { Editor } from "react-draft-wysiwyg";
import { IEditor } from "./interface";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './style.css';

export default function BlogEditor(props: IEditor) {
    const { placeholder, ...rest } = props;
    return (
        <div>
            <Editor
                placeholder={placeholder || 'Type here'}
            />
        </div>
    )
}
