import React, { Component } from 'react';
import {RoomContext} from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "../components/Title";

class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {loading,featuredRooms: rooms} = this.context;
        rooms = rooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })
        return (
            <div>
                <Title title="Featured rooms"/>
                <div className="featuredField">
                    {loading ? <Loading /> : rooms}
                </div>
            </div>
        )
    }
}

export default FeaturedRooms
