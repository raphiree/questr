import React from 'react';
import { Link } from 'react-router-dom';
import PhotoUploadImages from './photo_upload_images';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      titles: [],
      captions: [],
      selected: null,
    };
    this.handleFile = this.handleFile.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateCaption = this.updateCaption.bind(this);
    this.makeAvailableToEdit = this.makeAvailableToEdit.bind(this);
    this.deselectAll = this.deselectAll.bind(this);
    this.removeSelected = this.removeSelected.bind(this);
    this.submitAllPhotos = this.submitAllPhotos.bind(this);
  }

  componentDidUpdate() {
  }

  submitAllPhotos() {
    const currentState = this.state;
    Array.from(currentState.titles).map(title => {

      let numView = Math.round(Math.random() * 30);

      let idx = title.idx;
      let imageData = new FormData();
      (title.value === "") ? title.value = "Untitled" : title.value;
      imageData.append('title', title.value);
      (currentState.captions[idx].value === "") ? currentState.captions[idx].value = "No Description" : currentState.captions[idx].value;
      imageData.append('caption', this.state.captions[idx].value);
      imageData.append('user_id', this.props.currentUser.id);
      imageData.append('num_views', numView);
      imageData.append('image', this.state.files[idx].file);
      this.props.uploadPhotos(imageData).then(setTimeout(
        () => this.props.history.push(`/users/${this.props.currentUser.id}/photos`), 500))})}


  handleFile(e) {
    let newState = this.state;
    const uploadFiles = e.currentTarget.files;
    
    let i = 0;
    let k = 0;
    while (i < uploadFiles.length) {
      if (newState.files[k] !== undefined) {
        k++;
      } else {
        newState.files[k] = {
          idx: k,
          file: uploadFiles[i],
          url: URL.createObjectURL(uploadFiles[i]),
        }
        newState.titles[k] = {
          value: "",
          idx: k,
        }
        newState.captions[k] = {
          value: "",
          idx: k,
        }
        i++;
      }
    }
    this.setState(newState);
  }

  deselectAll(e) {
    e.preventDefault();
    e.stopPropagation();
    const clickArea = document.getElementsByClassName('previewImageSelected');
    Array.from(clickArea).map(ele => ele.classList.remove('previewImageSelected'))
    let newState = this.state;
    newState.selected = null;
    this.setState(newState)
  };

  updateTitle(id) {
    return (e) => {
      e.preventDefault();
      let newState = this.state;
      newState.titles[id] = { value: e.target.value, idx: id };
      this.setState(newState);
    }
  }

  updateCaption(id) {
    return (e) => {
      e.preventDefault();
      let newState = this.state;
      newState.captions[id] = { value: e.target.value, idx: id };
      this.setState(newState);
    }
  }

  makeAvailableToEdit(fileId) {
    let newState = this.state;
    newState.selected = fileId;
    this.setState(newState);
  }

  selectSelf(fileId) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      let image = document.getElementsByClassName(`previewImage-${fileId}`);
      this.deselectAll(e);
      image[0].classList.add('previewImageSelected');
      this.makeAvailableToEdit(fileId);
    }
  }

  removeSelected() {
    let newState = this.state;
    let idx = newState.selected;
    delete newState.files[idx];
    delete newState.titles[idx];
    delete newState.captions[idx];
    this.setState(newState);
  }

  render() {

    const preview = this.state.files.map(file => {
      return (
        <PhotoUploadImages 
          file={file} 
          key={file.idx} 
          updateTitle={this.updateTitle}
          updateCaption={this.updateCaption}
          selectSelf={this.selectSelf}
          deselectAll={this.deselectAll}
          makeAvailableToEdit={this.makeAvailableToEdit}
          />
      )
    })

    const toBeUploaded = Object.keys(this.state.titles).length;
    let disableButton; 
    (this.state.selected === null) ? disableButton = true : disableButton = false;

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

                  <button 
                    className="menu-bar-remove"
                    onClick={this.removeSelected}>
                    <div className="icon-remove" disabled={disableButton}>Remove</div>
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
              
              <label 
                className="upload-label" 
                htmlFor="upload-button"
                onClick={this.submitAllPhotos}>
                  Upload {toBeUploaded} Photos
              </label>

            </nav>
          </div>
          <form className="content" onClick={this.deselectAll}>
            
            {/* <PhotoEditBar state={this.state} /> */}

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