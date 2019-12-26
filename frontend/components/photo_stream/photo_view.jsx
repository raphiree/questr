import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from './user_header';
import UserFooter from './user_footer';
import FavButton from '../photo_index/photo_favs';
import { addView } from '../../util/photo_api_util';

class PhotoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.owner,
      allPhotos: this.props.ownerPhotos,
      currentUser: this.props.currentUser,
      photoId: this.props.match.params.photo_id,
      ownerId: this.props.match.params.user_id,
      thisURL: "",
      nextIdx: "",
      prevIdx: "",
      commentBody: "",
      comments: [],
      favorite: false,
      favId: undefined,
      thisPhoto: undefined,
      favCount: 0,
    }
    this.props.getUser(this.state.ownerId);
    this.props.getUserPhotos(this.state.ownerId);
    this.submitComment = this.submitComment.bind(this);
    this.props.getComments(this.state.photoId);
    this.clearCommentbox = this.clearCommentbox.bind(this);
    if (this.state.currentUser) {
      this.props.getAllFavorites(this.state.currentUser.id);
    }
    this.checkFavorite = this.checkFavorite.bind(this);
    this.setFavorite = this.setFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  componentDidUpdate() {
    if (this.state.photoId !== this.props.match.params.photo_id) {
      this.setState({photoId: this.props.match.params.photo_id});
      this.props.getComments(this.props.match.params.photo_id);
    }
    this.checkFavorite();
  }

  componentDidMount() {
    this.updateViewcount();
    this.setState({
      comments: this.props.photoComments,
    })
  }

  updateViewcount() {
    let viewData = new FormData();
    viewData.append('user_id', this.props.match.params.user_id);
    viewData.append('photo_id', this.props.match.params.photo_id);
    addView(viewData);
  }

  setFavorite() {
    let favData = new FormData();
    favData.append('user_id', this.props.currentUser.id);
    favData.append('photo_id', this.props.match.params.photo_id);
    this.props.favoritePhoto(favData)
    this.setState({favorite: true});
    let counter = document.getElementById('fav-counter');
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
  }

  removeFavorite() {
    this.setState({favorite: false});
    let favData = new FormData();
    favData.append('user_id', this.props.currentUser.id);
    favData.append('photo_id', this.props.match.params.photo_id);
    this.props.unfavoritePhoto(favData)
    let counter = document.getElementById('fav-counter');
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
  }

  checkFavorite() {
    let faveState = false;
    Object.values(this.props.userFavorites).map(faves => {
      if (faves.photo_id === parseInt(this.state.photoId)) {
        faveState = true;
      }
    }, this)
    if (this.state.favorite !== faveState) {
      this.setState({favorite: faveState});
    }
  }

  typeComment() {
    return (e) => {
      this.setState({commentBody: e.target.value})
    }
  }

  submitComment(e) {
    e.preventDefault();
    let commentData = new FormData;
    commentData.append('user_id', this.state.currentUser.id);
    commentData.append('photo_id', this.props.match.params.photo_id);
    commentData.append('comment', this.state.commentBody);
    this.props.createComment(commentData);
    this.clearCommentbox();
  }

  clearCommentbox() {
    const textarea = document.getElementsByClassName('photoview-comment-textarea');
    textarea[0].value = '';
  }

  render() {
    const allPhotos = this.props.ownerPhotos;
    const comments = this.props.photoComments;

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
          <div style={imgStyle} key={idx}>
            <div className="box">
              <img src={allPhotos[idx].image_url} />
            </div>
          </div>
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

    const commentList = Object.keys(comments).map(idx => {
      let comment = comments[idx];
      return (
        <div className="photoview-comment-cell" key={comment.id}>
          <div className="user-avatar"></div>
          <div className="comment-body">
            <Link to={`/users/${comment.user_id}/photos/`}>
              <h3>{comment.commenter}</h3>
            </Link>
            <h4>{comment.comment}</h4>
          </div>
        </div>
      )
    })

    const photoStats = Object.keys(allPhotos).map(idx => {
      let photo;
      if (allPhotos[idx].id === parseInt(this.props.match.params.photo_id)) {
        photo = allPhotos[idx];
        return (
          <div className="photo-stats" key={photo.id}>
            <div className="photo-stats-cell">
              <h3>{photo.num_views + 1}</h3>
              <h4>views</h4>
            </div>
            <div className="photo-fav-block">
              <FavButton
                fav={this.state.favorite}
                setFavorite={this.setFavorite}
                removeFavorite={this.removeFavorite}
              />
              <div className="photo-stats-cell">
                <h3 id="fav-counter">
                  {photo.favorite_total}
                </h3>
                <h4>faves</h4>
              </div>
            </div>
            <div className="photo-stats-cell">
              <h3>{photo.comment_total}</h3>
              <h4>comments</h4>
            </div>
            <div className="photo-stats-cell">
              <p>Uploaded On {photo.created_at.slice(0,10)}</p>
              <h4>All rights reserved</h4>
            </div>
          </div>
      )}
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
          </div>

          <div className="photoview-form-wrapper">
            <div className="photoview-comment-field">
              <div className="photoview-photo-desc">
              <div className="user-avatar"></div>
              {photoDesc}
              </div>

              {commentList}
              
              <form onSubmit={this.submitComment} id="commentForm">
                <input 
                  className="photoview-comment-textarea" 
                  type="textarea"
                  placeholder="Add a comment"
                  onChange={this.typeComment()}>
                </input>
                <input
                  className="photoview-comment-submit"
                  type="submit"
                  value="Comment">
                </input>
              </form>
            </div>

            <div className="photoview-info-field">
              {photoStats}   
            </div>
          </div>

        </div>

        <UserFooter />

      </div>
    )
  }
}

export default PhotoView;