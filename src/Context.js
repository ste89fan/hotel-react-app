import React, { Component } from "react";
import items from "./Data";

const RoomContext = React.createContext();

class Context extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(
      ...rooms.map(item => {
        return item.price;
      })
    );

    let maxSize = Math.max(
      ...rooms.map(item => {
        return item.size;
      })
    );

    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let temporaryRooms = [...rooms];

    capacity = parseInt(capacity);
    price = parseInt(price);

    // Filter Type

    if (type !== "all") {
      temporaryRooms = temporaryRooms.filter(room => room.type === type);
    }

    // Filter Capacity

    if(capacity !== 1) {
        temporaryRooms = temporaryRooms.filter(room => room.capacity >= capacity)
    }

    // Filter price

    temporaryRooms = temporaryRooms.filter(room => room.price <= price);


    //Filter size

    temporaryRooms = temporaryRooms.filter(room => room.size >= minSize && room.size <= maxSize);

    //Filter breakfast

    if(breakfast) {
      temporaryRooms = temporaryRooms.filter(room => room.breakfast === true)
    }

    //Filter pets

    if(pets) {
      temporaryRooms = temporaryRooms.filter(room => room.pets === true)
    }

    this.setState({
      sortedRooms: temporaryRooms
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

function helpConsumer(Component) {
  return function ConsumerWraper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { Context, RoomContext, RoomConsumer, helpConsumer };
