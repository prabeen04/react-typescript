import { EditorState, EditorChangeType } from "draft-js";

export interface IEditor {
    placeholder?: string;
    editorState: EditorState;
    setEditorState?(editorState: EditorState): void;
    rest?: any[]
}