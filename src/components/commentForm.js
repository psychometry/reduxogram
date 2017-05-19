import React,{Component} from 'react';
class CommentForm extends Component{
  handleSubmit=(e)=>{
    e.preventDefault();
    const author=this.refs.author.value;
    const comment=this.refs.comment.value;
    this.props.addComment(this.props.id,author,comment);
  };
  render(){
    return(
        <form ref='commentForm'className='comment-form' onSubmit={this.handleSubmit}>
          <div className='comment-form'>
          <input type='text' ref='author'/>
          <label>Author</label>
          </div>
          <div className='comment-form'>
          <input type='textarea' ref='comment'/>
          <label>Comment</label>
          </div>
          <input type='submit' hidden/>
        </form>
    );
  }
};
export default CommentForm;
