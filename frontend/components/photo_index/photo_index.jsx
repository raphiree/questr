import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../photo_stream/user_header';
import { logoutUser } from '../../actions/session_actions';

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
        let displayImage = new Image();
        displayImage.src = this.props.photos[photoIdx].image_url;        
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
          backgroundImage: `image-url(${this.props.photos[photoIdx].image_url})`,
          backgroundSize: `cover`,
        }

        return (
          <div className="photoIndex-main-grid" style={gridStyle} key={this.props.photos[photoIdx].id} >
            <div className="photoIndex-grid-user-wrapper">
              <Link to={`/users/${this.props.photos[photoIdx].user_id}/photos`}><div className="user-avatar"></div></Link>
              <div>
                <Link to={`/users/${this.props.photos[photoIdx].user_id}/photos`}><p className="photoIndex-username">{this.props.photos[photoIdx].username}</p></Link>
                <p className="photoIndex-featured">Carefully Curated</p>
              </div>
            </div>
            <Link to={`/users/${this.props.photos[photoIdx].user_id}/photos/${this.props.photos[photoIdx].id}`}><img src={displayImage.src}
              className="image" /></Link>
            <div className="photoIndex-grid-info-wrapper">
              <div className="photoIndex-info-top">
                <Link to={`/users/${this.props.photos[photoIdx].user_id}/photos/${this.props.photos[photoIdx].id}`}>{this.props.photos[photoIdx].title}</Link>
              </div>
              <div className="photoIndex-info-bot">
                <p>WIP Views & Comments {this.props.photos[photoIdx].num_views} views</p>
              </div>
            </div>
          </div>
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