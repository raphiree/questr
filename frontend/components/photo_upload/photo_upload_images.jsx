import React from 'react';
import { Link } from 'react-router-dom';



const PhotoUploadImages = (props) => {

  let style = {
    backgroundImage: 'url(' + props.url + ')',
    backgroundSize: '169px',
    minWidth: '169px',
    minHeight: '94px',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div className="previewBox">
      <div 
        className="previewImage"
        style={style}>
      </div>
    </div>
  );
};

export default PhotoUploadImages;