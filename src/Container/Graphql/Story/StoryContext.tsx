import * as React from 'react';
import { initialState } from "./useStory";
const StoryContext = React.createContext({ state: initialState, dispatch: (a: any) => { } })
export default StoryContext