import React from 'react';
import { Link } from 'react-router-dom';

class PhotoStreamPictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.photo.title,
      caption: this.props.photo.caption,
      image_url: this.props.photo.image_url,
      owner: this.props.owner,
      photoCount: this.props.photoCount,
      selfIdx: this.props.idx,
      photo: this.props.photo,
    }
  }

  render () {

    let gridStyle = {
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.6)), url(${this.state.image_url})`,
      backgroundSize: 'cover',
    }

    return (
        <div className="user-photostream-grid" style={gridStyle}>
          <img src={this.state.image_url} />
          <div className="flavorText">
            <h2>{this.state.title}</h2>
            <p>By {this.state.owner}</p>
          </div>
        </div>
    )
  }

}

export default PhotoStreamPictures;