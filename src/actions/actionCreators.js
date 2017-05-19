export function addLikes(index){
  console.log('fired');
  return{
    type:'INCREMENT_LIKE',
    index
  };
}

export function addComment(postId, author, comment){
  return{
      type:'ADD_COMMENT',
      postId,
      author,
      comment
  };
}
export function deleteComment(postId, index){
  return{
      type:'DELETE_COMMENT',
      postId,
      index,
  };
}
