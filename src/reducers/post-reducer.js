function post_reducer(state=[],action){
  switch(action.type){
    case 'INCREMENT_LIKE':
      const copy=Object.assign({},state[action.index]);
      copy.likes++;
      return [...state.slice(0,action.index),copy,...state.slice(action.index+1)];
    default:
      console.log('nothing');
      return state;
  }
}
export default post_reducer;
