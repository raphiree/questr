import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../photo_stream/user_header';
import PhotoCell from './photo_cell';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      display: 20,
      loaded: false,
    }
    this.props.getAllPhotos();
  }

  render() {
    const photoCell = Object.keys(this.props.photos).map(photoIdx => {
      if (photoIdx < this.state.display) {
        const photo = this.props.photos[photoIdx];
        let displayImage = new Image();
        displayImage.src = photo.image_url;
        let rowSpan = (Math.ceil([displayImage.height * 480 / displayImage.width / 50]));
        let gridStyle = { 
          gridRowEnd: `span ${rowSpan}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#111111',
          minWidth: '480px',
          maxWidth: '480px',
          backgroundImage: `image-url(${photo.image_url})`,
          backgroundSize: `cover`,
        }

        return (
          <PhotoCell
            photo={photo}
            displayImage={displayImage} 
            style={gridStyle} 
            key={photo.id} />
        )
      }
    })

    return (
      <>
        <UserHeader 
          currentUser={this.state.currentUser} 
          logoutUser={this.props.logoutUser} />
        <div className="user-nav-bar2">
          <div className="photoIndex-nav">
            <Link to="/photos"><div className="user-nav-button-photostream">All Photos</div></Link>
          </div>
        </div>
        <div className="photoIndex">

          <div className="photoIndex-grid-container">
            {photoCell}
          </div>

        </div>
      </>
    )
  }

}

export default PhotoIndex;