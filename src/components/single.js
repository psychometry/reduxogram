import React from 'react';
import Photo from './photo';
import Comments from './comments'
const Single=(props)=>{
  const postIndex=props.posts.findIndex((post)=>{return post.code===props.postId});
  const comments=props.comments[props.postId]||[];
  return(
    <div className='single'>
      <div>
        <Photo {...props} key={postIndex} index={postIndex} post={props.posts[postIndex]} />
      </div>
        <Comments comments={comments} id={props.postId} addComment={props.addComment} deleteComment={props.deleteComment}/>
    </div>
  );
};
export default Single;
