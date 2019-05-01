import * as React from 'react';
import { initialState } from "./useStory";
const StoryContext = React.createContext(initialState)
export default StoryContext