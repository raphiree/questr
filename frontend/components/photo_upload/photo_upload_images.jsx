import React from 'react';

class PhotoUploadImages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.file.file.name,
      description: "",
    }
    this.revealXbutton = this.revealXbutton.bind(this);
    this.hideXbutton = this.hideXbutton.bind(this);
  }
  
  revealXbutton(fileId) {
    let xbutton = document.getElementById(`removeImage-${fileId}`);
    xbutton.classList.remove('hidden');
  }

  hideXbutton(fileId) {
    let xbutton = document.getElementById(`removeImage-${fileId}`);
    xbutton.classList.add('hidden');
  }

  render () {

    const file = this.props.file;

    let style = {
      marginTop: '14px',
      backgroundImage: 'url(' + file.url + ')',
      backgroundSize: '169px',
      minWidth: '169px',
      minHeight: '94px',
      maxHeight: '130px',
      backgroundRepeat: 'no-repeat',
    }

    return (
      <button
        className={'previewBox-' + file.idx}
        onClick={this.props.selectSelf(file.idx)}>

        <div
          id={`removeImage-${file.idx}`}
          className='hidden'>
        </div>

        <div
          className={`previewImage-${file.idx}`}
          style={style}
          name={file.idx}
          // onMouseEnter={this.revealXbutton(file.idx)}
          // onMouseLeave={this.hideXbutton(file.idx)}
          >
        </div>

        <div className="uploadInput-wrapper">
          <input 
            type="text" 
            className="uploadInputs"
            defaultValue={this.state.title}
            onChange={this.props.updateTitle(file.idx)}
            />

          <input 
            type="textarea" 
            className="uploadInputs"
            defaultValue="Add a description"
            onChange={this.props.updateCaption(file.idx)}
            />
        </div>

      </button>
    )
  }

}

export default PhotoUploadImages;