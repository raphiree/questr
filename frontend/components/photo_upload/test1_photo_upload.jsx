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
  }

  componentDidUpdate() {
    console.log(this.state);
    console.log(this.props);
    console.log(this.props.previews.images);
    debugger
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
              <div className="toolBar-left">
                <div className="grouping1" >
                  <label className="menu-bar-add" htmlFor="add-button">
                    <div className="icon-add">Add</div>
                  </label>

                  <button className="menu-bar-remove">
                    <div className="icon-remove">Remove</div>
                  </button>

                  <input
                    id="add-button"
                    type="file"
                    onChange={this.handleFile}
                    multiple
                  />
                </div>


                <button className="menu-bar-size">
                  <div className="icon-size">Size</div>
                </button>

                <button className="menu-bar-sort">
                  <div className="icon-sort">Sort</div>
                </button>
                <button className="menu-bar-all">
                  <div className="icon-all">All</div>
                </button>
                <button className="menu-bar-info">
                  <div className="icon-info">Sort</div>
                </button>


              </div>

              <label className="upload-label" htmlFor="upload-button">Upload 10 Photos</label>

            </nav>
          </div>
          <form className="content">
            <div id="imageAttr">
              <p>Select photos to edit...</p>
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