import React from 'react';
import Photo from './Photo';

export default function PhotoGrid(props) {
    return (
        <div className="photo-grid">
            {props.post.map((post, index) => <Photo {...props} key={post.code} index={index} post={post} />)}
        </div>
    )
}
