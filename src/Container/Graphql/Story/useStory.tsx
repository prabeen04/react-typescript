import * as React from 'react';
const initialState = {count: 0};

function reducer(state: any, action: any) {
  switch (action.type) {
    default:
      throw new Error('should have a condition');
  }
}

export default function useStory() {
    const initialState = {

    }
    const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div>
      
    </div>
  )
}
