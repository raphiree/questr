import React from 'react';

class FavButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    if (this.props.fav === false) {
      return (
        <i className="material-icons" onClick={this.props.setFavorite}>star_border</i>
      )
    } else {
      return (
        <i className="material-icons" onClick={this.props.removeFavorite}>star</i>
      )
    }
  }
}

export default FavButton;