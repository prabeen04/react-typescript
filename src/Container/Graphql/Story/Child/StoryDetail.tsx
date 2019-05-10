import * as React from 'react'
import useStory from "../useStory";

export default function StoryDetail() {
  const { state, dispatch } = useStory()
  return (
    <div className='story-detail' data-test='StoryDetail'>
      <p>Story details</p>
    </div>
  )
}
