import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import { useQuery } from "react-apollo-hooks";
import moment from 'moment';
import StoryDetailHeader from './StoryDetailHeader';
import Error from '../../../../Component/Common/Error'
import CircularLoading from '../../../../Component/Loading/CircularLoading';
import { GET_STORY_DETAIL } from "../../StoryQuery";
interface IStoryDetailProps extends RouteComponentProps<any> { }

function StoryDetail(props: IStoryDetailProps) {
  const storyId = props.match.params.id; //get storyId from url
  const { data, error, loading } = useQuery(GET_STORY_DETAIL, {
    variables: { storyId },
    skip: !storyId
  })
  console.log(data)
  console.log(error)
  console.log(loading)
  if (!storyId) return <CircularLoading />;
  if (loading) return <CircularLoading />;
  if (error) return <Error description='Unable to fetch data.' />;
  return (
    <>
      <StoryDetailHeader />
      <div className='story-detail' data-test='StoryDetail'>
        <>
          <div className='story-detail-heading'>
            <div>
              <h3>{data.getStoryById.title} </h3>
              <p className='author'>{data.getStoryById.user.userName}</p>
            </div>
          </div>
          <div className="article-body">
            <p className='inside-author'>{data.getStoryById.user.userName}</p>
            <p className='inside-author'>{moment(data.getStoryById.createdAt).format('lll')}</p>
            <div dangerouslySetInnerHTML={{ __html: data.getStoryById.article }} className='article-body' />
          </div>
        </>
      </div>
    </>
  )
}

export default withRouter(StoryDetail)