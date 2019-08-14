import React, { Component } from "react";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {RoomContext} from "../Context";
import StyledHero from "../components/StyledHero";

class SingleRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: this.props.match.params.slug
    }
  }

  static contextType = RoomContext;

  componentDidMount(){

  }
  
  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    if(!room) {
      return <div className="error">
        <h3>Room doesn't exist</h3>
        <Link to="/rooms">
            Back to Rooms
        </Link>
      </div>
    }
    const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="roomDetails">
          <div className="singleRoomDetail">
            {images.map((item,index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className="singleRoomInfo">
            <article className="sinleDescription">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity : {
                  capacity < 2 ? `${capacity} person` : `${capacity} people`
                }
              </h6>
              <h6>Pet's : {pets ? "Pet's allowed" : "Pet's not allowed"}</h6>
              <h6>{breakfast && "Breakfast included"}</h6>
            </article>
            <article className="extrasField">
              <h3>Extras</h3>
              <ul>
                {extras.map((item,index) => {
                  return <li key={index}>- {item}</li>
                })}
              </ul>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default SingleRoom;
