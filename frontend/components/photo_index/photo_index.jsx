import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../photo_stream/user_header';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 5,
    }
  }

  componentDidMount () {
    this.props.getAllPhotos()
  }

  // className = {`photoIndex-grid-${Math.ceil([this.imgEl.naturalHeight] / 100)}}`} 

  render() {

    const photoCell = Object.keys(this.props.photos).map(photoIdx => {
      if (photoIdx < this.state.display) {

        let testImg = new Image();
        testImg.src = this.props.photos[photoIdx].image_url;
        let rowSpan = (Math.ceil([testImg.height * 480 / testImg.width / 200]));
        let gridStyle = { gridRowEnd: `span ${rowSpan}` }

        return (
          <div style={gridStyle} key={this.props.photos[photoIdx].id} >
            <img src={testImg.src}
              className="image" />
            <div>Title View Count</div>
            <div>Other Icons</div>
          </div>
        )
      }
    })

    return (
      <>
        <UserHeader currentUser={this.props.currentUser} />
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