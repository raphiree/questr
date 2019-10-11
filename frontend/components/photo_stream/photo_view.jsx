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

  getThisPhoto() {

  }

  render() {

    const owner = this.state.owner;
    const allPhotos = this.props.ownerPhotos;

    const prevButton = Object.keys(allPhotos).map(idx => {
      if (allPhotos[idx].id === parseInt(this.props.match.params.photo_id)) {
        let prevURL;
        if (parseInt(idx) === 0) {
          prevURL = Object.keys(allPhotos).length - 1;
        } else {
          prevURL = idx - 1;
        }
        return (
          <Link to={`/users/${this.state.ownerId}/photos/${allPhotos[prevURL].id}`} key={idx}>
            <div className="directional-l"><div className="box"></div></div>
          </Link>
        )
      }
    })

    const nextButton = Object.keys(allPhotos).map(idx => {
      if (allPhotos[idx].id === parseInt(this.props.match.params.photo_id)) {
        let nextURL;
        if (parseInt(idx) === parseInt(Object.keys(allPhotos).length - 1)) {
          nextURL = 0;
        } else {
          nextURL = parseInt(idx) + 1;
        }
        return (
          <Link to={`/users/${this.state.ownerId}/photos/${allPhotos[nextURL].id}`} key={idx}>
            <div className="directional-r"><div className="box"></div></div>
          </Link>
        )
      }
    })

    const photoDisplay = Object.keys(allPhotos).map(idx => {
      if (allPhotos[idx].id === parseInt(this.props.match.params.photo_id)) {
        
        let imgStyle = {
          backgroundColor: '',
          minHeight: '706px',
        }
        
        return (
          <div style={imgStyle} key={idx}><div className="box"><img src={allPhotos[idx].image_url} /></div></div>
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

      let boxStyle 
      if (parseInt(allPhotos[idx].id) === parseInt(this.props.match.params.photo_id)) {
        boxStyle = {
          backgroundImage: `url(${allPhotos[idx].image_url})`,
          backgroundSize: 'cover',
          border: `1px #FFFFFF solid`,
        }
      } else {
        boxStyle = {
          backgroundImage: `url(${allPhotos[idx].image_url})`,
          backgroundSize: 'cover',
        }
      }
      return (
        <Link to={`/users/${this.state.ownerId}/photos/${allPhotos[idx].id}`} key={allPhotos[idx].id}>
          <div className="thumbnail-list" style={boxStyle}>
              <div className="box"></div>
          </div>
        </Link >
        )
    })


    return (
      <div className="photoview-wrapper">

        <UserHeader currentUser={this.props.currentUser} logoutUser={this.props.logoutUser } />

        <div className="photoview-display-main" >
          
          <div className="photoview-display-top">
            <Link to={`/users/${this.props.match.params.user_id}/photos`} >  
              <i className="material-icons">&#xe5c4;</i>
              <p>Back to the photostream</p>
            </Link>
          </div>

          <div className="photoview-display-center">
            {prevButton}
            {photoDisplay}
            {nextButton}
          </div>
          
          <div className="photoview-display-below">
          </div>

          <div className="photoview-form-container">
            
            <div id="arrayBar">
              {photoArray}
            </div>

            <div className="photoview-form-wrapper">
              <div className="user-avatar"></div>
              {photoDesc}
            </div>
          </div>

        </div>

        {prevButton}

        <UserFooter />

      </div>
    )
  }
}

export default PhotoView;