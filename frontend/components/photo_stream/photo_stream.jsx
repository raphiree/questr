import React from 'react';
import { Link } from 'react-router-dom';
import PhotoStreamPictures from './photo_stream_pictures';

class PhotoStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      owner: this.props.pageOwner,
      photos: this.props.ownerPhotos,
    }
  }

  componentDidUpdate() {
  }

  componentDidMount() {
    this.props.getUser(this.state.id);
    this.props.getUserPhotos(this.state.id);
  }

  render() {
    let user = this.props.currentUser || null;
    let authOptions;

    if (user) {
      authOptions = (
        <nav id="userAuth">
          <button className="signup-blue">Sign Out</button>
        </nav>
      )
    } else {
      authOptions = (
        <nav id="userAuth">
          <Link to="/login"><div className="login">Log In</div></Link>
          <Link to="/signup"><button className="signup-blue">Sign Up</button></Link>
        </nav>
      )  
    }

    const photoStream = Object.keys(this.state.photos).map((idx, photo) => {
      return (
        <div class="user-photostream-grid-item">
          <PhotoStreamPictures photo={this.state.photos[idx]} key={photo.id} />
        </div>
      )
    })

    return (
      <div id="photostream-wrapper">
        <nav className="user-nav-bar">
          <div className="user-nav-wrapper">
            <Link to="/"><p id="user-nav-logo">questr</p></Link>
            {authOptions}
          </div>
        </nav>
        <div className="user-header-wrapper">
          <div className="user-header">
            <div className="user-avatar"></div>
            <h1>{this.props.pageOwner}</h1>
          </div>
        </div>
        <div className="user-header-bar-wrapper">
          <div className="user-header-bar">
            <Link to={`/users/${this.state.id}/photos`}>
              <div className="user-nav-button-photostream">Photostream</div>
            </Link>
          </div>
        </div>
        <div className="user-content-wrapper">
          <div className="user-photostream-grid-container">
            
            <p>Other stuff</p>

            {photoStream}

          </div>
        </div>
      </div>
    )
  }
}

export default PhotoStream;