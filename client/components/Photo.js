import React from 'react'
import {Link} from 'react-router-dom';

export default function Photo(props) {
    return (
        <figure className='grid-figure'>
            <div className='grid-photo-wrap'>
            <Link to={`/view/${props.post.code}`}>
                <img src={props.post.display_src} alt={props.post.caption} className='grid-photo' />
            </Link>
            </div>
            <figcaption>

          <p>{props.post.caption}</p>

          <div className='control-buttons'>
          <button onClick={props.increment.bind(null, props.index)} className='likes'> &hearts; {props.post.likes}</button>
            <Link className='button' to={`/view/${props.post.code}`}>
              <span className='comment-count'>
                <span className='speech-bubble'> </span>
                {props.comments[props.post.code] ? props.comments[props.post.code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>
        </figure>
    )
}
