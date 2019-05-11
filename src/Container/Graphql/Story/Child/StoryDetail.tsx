import * as React from 'react'
import useStory from "../useStory";
import StoryContext from "../StoryContext";

export default function StoryDetail() {
  const { state, dispatch } = useStory()
  const test = React.useContext(StoryContext)
  console.log(test)
  console.log(useStory())
  return (
    <div className='story-detail' data-test='StoryDetail'>
      <p>Story details</p>
    </div>
  )
}
