import React from 'react';
import { Link } from 'react-router-dom';
import FavButton from './photo_favs';

class PhotoCell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: this.props.favorited,
    }
    this.setFavorite = this.setFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  setFavorite() {
    let favData = new FormData();
    favData.append('user_id', this.props.currentUser.id);
    favData.append('photo_id', this.props.photo.id);
    let newState = this.state;
    this.props.favoritePhoto(favData)
    newState.favorite = true;
    this.setState(newState);
  }

  removeFavorite() {
    let favData = new FormData();
    favData.append('user_id', this.props.currentUser.id);
    favData.append('favorite_id', this.props.favId);
    let newState = this.state;
    this.props.unfavoritePhoto(favData)
    newState.favorite = false;
    this.setState(newState);
  }

  render () {
    const photo = this.props.photo
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
      <div className="photoIndex-main-grid" style={gridStyle} >
        <div className="photoIndex-grid-user-wrapper">
          <Link to={`/users/${photo.user_id}/photos`}><div className="user-avatar"></div></Link>
          <div>
            <Link to={`/users/${photo.user_id}/photos`}>
              <p className="photoIndex-username">{photo.username}</p>
            </Link>
            <p className="photoIndex-featured">Carefully Curated</p>
          </div>
        </div>
        <Link to={`/users/${photo.user_id}/photos/${photo.id}`}><img src={displayImage.src}
          className="image" /></Link>
        <div className="photoIndex-grid-info-wrapper">
          <div className="photoIndex-info-top">
            <Link to={`/users/${photo.user_id}/photos/${photo.id}`}>{photo.title}</Link>
          </div>
          <div className="photoIndex-info-bot">
            <p>{photo.num_views}</p>
            <div className="favStar">
              <FavButton 
                fav={this.state.favorite} 
                setFavorite={this.setFavorite}
                removeFavorite={this.removeFavorite}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoCell;