import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../photo_stream/user_header';
import PhotoCell from './photo_cell';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      display: 10,
      loading: false,
    }

    this.props.getAllPhotos();
    if (this.state.currentUser) {
      this.props.getAllFavorites(this.state.currentUser.id);
    }
    this.favoritePhoto = this.props.favoritePhoto.bind(this);
    this.unfavoritePhoto = this.props.unfavoritePhoto.bind(this);
    this.loadMorePhotos = this.loadMorePhotos.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidUpdate() {
    window.addEventListener("scroll", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  handleScroll() {
    const cells = document.getElementsByClassName('photoIndex-main-grid');
    const lastCell = cells[cells.length - 1];
    if (this.state.loading === false && lastCell.offsetTop < (window.pageYOffset + window.innerHeight)) {
      this.loadMorePhotos();
    }
  }

  loadMorePhotos() {
    this.props.loadMorePhotos(this.state.display).then(
      setTimeout(() => {
        let newState = this.state;
        this.state.loading = false;
        this.setState(newState)
      }, 5000));
    let newState = this.state;
    newState.display += 10;
    newState.loading = true;
    this.setState(newState)
  }

  render() {
    const favArray = {}
    Object.keys(this.props.userFavorites).map(favId => {
      favArray[this.props.userFavorites[favId].photo_id] = this.props.userFavorites[favId].id
    })
    
    const photoCell = Object.keys(this.props.photos).map(photoIdx => {
      if (photoIdx < this.state.display) {
        const photo = this.props.photos[photoIdx];
        let favorited;
        (Object.keys(favArray).includes(photo.id.toString())) ? favorited = true : favorited = false;
        return (
          <PhotoCell
            photo={photo}
            key={photo.id} 
            currentUser={this.props.currentUser}
            favoritePhoto={this.favoritePhoto}
            unfavoritePhoto={this.unfavoritePhoto}
            favorited={favorited}
            favId={favArray[photo.id]}
          />
        )}
    })

    return (
      <>
        <UserHeader 
          currentUser={this.props.currentUser} 
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