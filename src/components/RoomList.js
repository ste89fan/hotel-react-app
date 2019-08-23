import React from 'react';
import Room from "./Room";

function RoomList({rooms}) {
    if(rooms.length===0){
        return(
            <div className="errorSearchRoom">
                <h3>Match is not found!!!</h3>
            </div>   
        )
    }
    return <section>
        <div className="roomsFieldSec">
            {rooms.map(room => {
               return <Room key={room.id} room={room}/>
            })}
        </div>
    </section>
}

export default RoomList
