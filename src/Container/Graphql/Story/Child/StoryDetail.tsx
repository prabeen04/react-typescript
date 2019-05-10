import * as React from 'react'
import useStory from "../useStory";

export default function StoryDetail() {
  const { state, dispatch } = useStory()
  console.log(state)
  return (
    <div className='story-detail' data-test='StoryDetail'>
      <p>Story details</p>
      <h2>{state.selectedStory}</h2>
    </div>
  )
}
