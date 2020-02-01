import './VideoItem.css'
import React from 'react';

const VideoItem = (props) => {
    return (
    <div className="video-item">
        <img className="ui image" style={{maxWidth: "180px"}} src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;