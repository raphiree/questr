import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from './user_header';
import UserFooter from './user_footer';

class PhotoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    // let uploadDate;
    // if (this.props.ownerPhotos) { joinDate = `Joined ${this.props.joinDate.split("-")[0]}` }; 

    

    return (
      <div className="photoview-wrapper">

        <UserHeader currentUser={this.props.currentUser}/>

        <div className="photoview-display-wrap">

        </div>

        <div className="photoview-form-wrap">

        </div>

        <UserFooter />

      </div>
    )
  }
}

export default PhotoView;