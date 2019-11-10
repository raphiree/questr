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
    this.favoritePhoto = this.props.favoritePhoto.bind(this);
  }

  render() {
    const photoCell = Object.keys(this.props.photos).map(photoIdx => {
      if (photoIdx < this.state.display) {
        const photo = this.props.photos[photoIdx];
        return (
          <PhotoCell
            photo={photo}
            key={photo.id} 
            currentUser={this.props.currentUser}
            favoritePhoto={this.favoritePhoto}
          />
        )}
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