import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';
import { uploadImages } from '../../actions/upload_actions';
import PhotoUploadImages from './photo_upload_images';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
    this.handleFile = this.handleFile.bind(this);
  }

  // handleFile(e) {
  //   const uploadFiles = e.currentTarget.files;
  //   let newState = this.state;
  //   for (let i = 0; i < uploadFiles.length; i++) {
  //     const image_file = uploadFiles[i];
  //     const fileReader = new FileReader();
  //     fileReader.onloadend = () => {
  //       newState.images[i] = {
  //         image: image_file, 
  //         image_url: fileReader.result, 
  //         id: i
  //       };
  //     }
  //     if (image_file) {
  //       fileReader.readAsDataURL(image_file);
  //     }
  //   }
  //   this.setState(newState);
  // }

  handleFile(e) {
    let newState = this.state;
    const uploadFiles = e.currentTarget.files;
    for (let i = 0; i < uploadFiles.length; i++) {
      newState.files[i] = {
        id : i,
        file : uploadFiles[i], 
        url : URL.createObjectURL(uploadFiles[i]),
      }
    }
    this.setState(newState);
  }

  componentDidUpdate () {
    console.log(this.state.files);
    console.log(Object.keys(this.state.files).length);
  }
  
  componentDidMount () {
  }

  render() {

    const preview = this.state.files.map(file => {
      return (
        <PhotoUploadImages url={file.url} key={file.id} />
      )
    })

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





            <div id="uploadSpread">
              {preview}
            </div>





          </form>
          <div className="bottomBar"></div>
        </div>
      </div>
    )
  }

}

export default PhotoUpload;