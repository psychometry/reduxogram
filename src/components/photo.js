import React from 'react';
import {Link} from 'react-router-dom';
import './photoGrid.css';
const Photo=(props)=>{
  const url="/view/"+props.post.code;
  return (
    <figure className='photo'>
      <Link to={url}>
        <img src={props.post.display_src} alt={props.post.caption}/>
      </Link>
      <figcaption>
        <div className='caption'>
        <span>{props.post.caption}</span>
        <span className='control'>
        <button onClick={props.addLikes.bind(null, props.index)}>&#128151;{props.post.likes}</button>
          <Link to={url}>
             &#128172;{props.comments[props.post.code]?props.comments[props.post.code].length:0}
          </Link>
        </span>
        </div>
      </figcaption>
    </figure>
  );
};

export default Photo;
