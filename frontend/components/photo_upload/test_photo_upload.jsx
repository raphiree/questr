import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';
import { uploadImages } from '../../actions/upload_actions';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images:{}
    }
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    const uploadFiles = e.currentTarget.files;
    let newState = this.state;
    for (let i = 0; i < uploadFiles.length; i++) {
      const image_file = e.currentTarget.files[i];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        newState.images = _.merge(newState.images, { [i]: {images: image_file, image_url: fileReader.result }});
      }
      if (image_file) {
        fileReader.readAsDataURL(image_file);
      }
    }
    this.props.uploadImages(newState);
    console.log(newState);
  }

  render() {
    let previewCount;
    if (this.props.preview !== undefined) {
      previewCount = "It works";
    } else {
      previewCount = 0;
    }

    return (

      <div className="background-container">
        <div className="container-upload">
          <div className="topBar">
            <nav className="navBar">
              <Link to="/"><div className="colorlogo"><p>quest</p><p>r</p></div></Link>
            </nav>
            <nav className="toolBar">
              <div></div>

              <input
                id="upload-button"
                type="file"
                onChange={this.handleFile.bind(this)}
                multiple
              />
              <label className="upload-label" htmlFor="upload-button">Upload 10 Photos</label>

            </nav>
          </div>
          <form className="content">
            <div id="imageAttr">
              <p>Select photos to edit... {previewCount}</p>
            </div>

            <div></div>

          </form>
          <div className="bottomBar"></div>
        </div>
      </div>
    )
  }

}

export default PhotoUpload;