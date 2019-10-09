import React from 'react';

const UserFooter = () => {
  return (
    <div className="user-footer-wrapper">
      <div className="user-footer">
        <div className="user-footer-nav">
          <a href="https://www.flickr.com/photos/184651160@N04/with/48865432622/">External Link</a>
        </div>
        <div className="user-footer-links">
          <a href="https://github.com/raphiree/questr/blob/master/README.md">
            Read Me on Github
          </a>
          Play Final Fantasy XIV everyone, it's a really fun game
          <div className="externalIcons">
            <a href=""><img src={`${window.github}`} className="footer-exicons"/></a>
            <a href=""><img src={`${window.linkedin}`} className="footer-exicons" /></a>
            <a href=""><img src={`${window.twitter}`} className="footer-exicons" /></a>
            <a href=""><img src={`${window.instagram}`} className="footer-exicons" /></a>
          </div>
        </div>
      </div>
    </div>
  )}

export default UserFooter;