import React from 'react';
import CommentForm from './commentForm';
import './comments.css';
const Comments=(props)=>{
  const comment_list=props.comments.map(
    (comment,i)=>{
      return (
        <p key={i}>
          <strong>{comment.user} : </strong>
          {comment.text}
          <button className='remove-comment' onClick={props.deleteComment.bind(null,props.id, i)}>&times;
          </button>
        </p>);
    }
  );
  return(
    <div className='comment'>
      <div className='comment-box'>{comment_list}</div>
      <CommentForm id={props.id} addComment={props.addComment}/>
    </div>
  );
};
export default Comments;
