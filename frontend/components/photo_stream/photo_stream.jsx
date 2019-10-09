import React from 'react';
import { Link } from 'react-router-dom';
import PhotoStreamPictures from './photo_stream_pictures';
import UserFooter from './user_footer';
import UserHeader from './user_header';

class PhotoStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      logged: this.props.currentUser,
    }
  }
  
  componentDidMount() {
    this.props.getUserPhotos(this.state.id);
    this.props.getUser(this.state.id);
  }

  render() {
    let ownerUsername;
    if (this.props.pageOwner) { ownerUsername = this.props.pageOwner.username }

    const photoCount = Object.keys(this.props.ownerPhotos).length;

    let joinDate;
    if (this.props.joinDate) {joinDate = `Joined ${this.props.joinDate.split("-")[0]}`}; 

    const photoStream = Object.keys(this.props.ownerPhotos).map(idx => {
        return ( 
          <Link to={`/users/${this.props.pageOwner.id}/photos/${this.props.ownerPhotos[idx].id}`} key={idx} >
            <PhotoStreamPictures 
              owner={ownerUsername} 
              photo={this.props.ownerPhotos[idx]}
              photoCount={photoCount}
              idx={idx} />
          </Link>
          )
      })

    return (
      
      <div className="photostream-wrapper">

        <UserHeader currentUser={this.props.currentUser} />

        <div className="user-header-wrapper">
          <div className="user-header">
            <div className="user-avatar"></div>
            <div className="user-textwrap">
              <h1>{ownerUsername}</h1>
              <div className="user-textwrap-info">
                <h3>{joinDate}</h3>
                <h3>{photoCount} photos</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="user-header-bar-wrapper">
          <div className="user-header-bar">
            <Link to={`/users/${this.state.id}/photos` }>
              <div className="user-nav-button-photostream">Photostream</div>
            </Link>
          </div>
        </div>
        <div className="user-content-wrapper">
          <div className="user-photostream-grid-container">

            {photoStream}

          </div>
        </div>
        <UserFooter />
      </div>
    )
  }
}

export default PhotoStream;