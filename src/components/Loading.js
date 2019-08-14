import React from 'react';
import loadingGif from "../RoomImages/gif/loading-arrow.gif";

function Loading() {
    return (
        <div className="loading">
            <h3>Rooms data loading...</h3>
            <img src={loadingGif} alt="Load" />
        </div>
    )
}

export default Loading

