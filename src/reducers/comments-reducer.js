function comments_reducer(state=[],action){
  if(typeof action.postId !== 'undefined'){
    let post=state[action.postId];
    switch(action.type){
      case 'ADD_COMMENT':
        post={[action.postId]:[...post,{
          user:action.author,
          text:action.comment,
        }]};
        return Object.assign({},state,post);
      case 'DELETE_COMMENT':
        let updated=[...post.slice(0,action.index),...post.slice(action.index+1)];
        return Object.assign({},state,{[action.postId]:updated});
      default:
        return state;
    }
  }
  return state;
}
export default comments_reducer;
