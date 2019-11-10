import React from 'react';
import { Link } from 'react-router-dom';

class PhotoCell extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const photo = this.props.photo

    return (
      <div className="photoIndex-main-grid">
        <div className="photoIndex-grid-user-wrapper">
          <Link to={`/users/${photo.user_id}/photos`}><div className="user-avatar"></div></Link>
          <div>
            <Link to={`/users/${photo.user_id}/photos`}>
              <p className="photoIndex-username">{photo.username}</p>
            </Link>
            <p className="photoIndex-featured">Carefully Curated</p>
          </div>
        </div>
        <Link to={`/users/${photo.user_id}/photos/${photo.id}`}><img src={this.props.displayImage.src}
          className="image" /></Link>
        <div className="photoIndex-grid-info-wrapper">
          <div className="photoIndex-info-top">
            <Link to={`/users/${photo.user_id}/photos/${photo.id}`}>{photo.title}</Link>
          </div>
          <div className="photoIndex-info-bot">
            <p>{photo.num_views}</p>
            <div className="material-icons">star_border</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoCell;