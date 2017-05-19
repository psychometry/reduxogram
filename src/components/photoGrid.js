import React from 'react';
import Photo from './photo';
import './photoGrid.css';
const PhotoGrid=(props)=>{
  return(
    <div className='photo-grid'>
      {props.posts.map(
        (post,i)=>{
            return <Photo {...props} key={i} index={i} post={post} />
        }
      )}
    </div>
  );
};
export default PhotoGrid;
