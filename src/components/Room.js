import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <article>
      <div className="imageContainer">
        <img src={images[0]} alt="single-room" />
            <div className="price">
                <h6>${price}</h6>
                <p>per night</p>
            </div>
            
              <Link to={`/rooms/${slug}`} className="btn-primary roomBtn">Info about room</Link>
            
            
      </div>
      <p className="roomInfo">{name}</p>
    </article>
  );
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}

export default Room;
