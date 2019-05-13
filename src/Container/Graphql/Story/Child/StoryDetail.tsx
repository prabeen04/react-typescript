import * as React from 'react'
import StoryContext from "../StoryContext";

export default function StoryDetail() {
  const { state, dispatch } = React.useContext(StoryContext)
  return (
    <div className='story-detail' data-test='StoryDetail'>
      <p>Story details</p>
      <a href='#'>{state.selectedStory}</a>
    </div>
  )
}
