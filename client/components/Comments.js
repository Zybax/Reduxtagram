import React, {Component} from 'react'

export default class Comments extends Component {

  constructor(props){
    super(props);
  }

    renderComment() {
    
    return this.props.postComments.map((comment, i) =>{
      return (
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button onClick={this.props.removeComment.bind(null, this.props.match.params.postID, i)} className="remove-comment">&times;</button>
          </p>
        </div>
      )
    })}
    
    handleSubmit(e){
      e.preventDefault();
      const postId = this.props.match.params.postID;
      const author = this.refs.author.value;
      const comment = this.refs.comment.value;
      this.props.addComment(postId, author, comment);
      this.refs.commentForm.reset();
     
    }
    render() {
        return (
            <div className="comments">
            {this.renderComment()}
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)} >
              <input type="text" ref="author" placeholder="author"/>
              <input type="text" ref="comment" placeholder="comment"/>
              <input type="submit"/>
            </form>
          </div>
        )
    }
}

