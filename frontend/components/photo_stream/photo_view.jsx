import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from './user_header';
import UserFooter from './user_footer';

class PhotoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.owner,
      allPhotos: this.props.ownerPhotos,
      currentUser: this.props.currentUser,
      photoId: parseInt(this.props.match.params.photo_id),
      ownerId: this.props.match.params.user_id,
      thisURL: "",
      nextIdx: "",
      prevIdx: "",
    }
    console.log(this.state.photoId)
  }

  componentDidMount() {
    this.props.getUserPhotos(this.state.ownerId);
    this.props.getUser(this.state.ownerId);
  }

  componentDidUpdate() {

  }
  
  render() {

    const owner = this.state.owner;
    const allPhotos = this.props.ownerPhotos;

    const photoDisplay = Object.keys(allPhotos).map(idx => {
      if (allPhotos[idx].id === parseInt(this.props.match.params.photo_id)) {

        return (
          <img src={allPhotos[idx].image_url} key={idx} />
        )
      }
    })

    const photoDesc = Object.keys(allPhotos).map(idx => {
      if (allPhotos[idx].id === parseInt(this.props.match.params.photo_id)) {
        let title = allPhotos[idx].title;
        let caption = allPhotos[idx].caption;
        return (
          <div className="form-descriptions" key={idx} >
            <div className="form-owner"><Link to={`/users/${this.state.ownerId}/photos`}>{this.props.pageOwner}</Link></div>
            <input type="text" className="form-title" placeholder={title}></input>
            <input type="textarea" className="form-caption" placeholder={caption}></input>
          </div>
        )
      }
    })

    const photoArray = Object.keys(allPhotos).map(idx => {
      return (
        <div className="thumbnail-list">
          <Link to={`/users/${this.state.ownerId}/photos/${allPhotos[idx].id}`} key={allPhotos[idx].id}>
            <img className="photoview-thumbnails"
              src={allPhotos[idx].image_url} />
          </Link>
        </div>
        )
    })


    return (
      <div className="photoview-wrapper">

        <UserHeader currentUser={this.props.currentUser} />

        <div className="photoview-display-main" >
          
          <div className="photoview-display-top">
            <Link to={`/users/${this.props.match.params.user_id}/photos`} >  
              <i className="material-icons">&#xe5c4;</i>
              <p>Back to the photostream</p>
            </Link>
          </div>

          {photoDisplay}

          <div className="photoview-display-below">
            {/* <div className="photoview-display">
              {photoArray}
            </div> */}
          </div>

          <div className="photoview-form-container">
            <div className="photoview-form-wrapper">
              <div className="user-avatar"></div>
              {photoDesc}
            </div>
          </div>

        </div>

        <UserFooter />

      </div>
    )
  }
}

export default PhotoView;