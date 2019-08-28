import React from 'react'
import Photo from './Photo';
import Comments from './Comments';
// import Comments from './Comments';

export default function Single(props) {
    const postId = props.match.params.postID;

    const post = props.post.filter(current => { 
      if (postId === current.code){
        return true;
      }
    })[0];

    const index = props.post.indexOf(post);
  
    const postComments = props.comments[postId] || [];
   
    return (
      <div className='single-photo'>
        <Photo {...props} key={post.code} index={index} post={post} />
        <Comments {...props} postComments={postComments} index={index} />
      </div>
    )
}
