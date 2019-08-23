import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { helpConsumer } from "../Context";
import Loading from "./Loading";

// Consumer is for functional Components

// This is the way to implement Consumer with HOC (Higher order Component)

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default helpConsumer(RoomsContainer);

// This is a second way to implement Consumer

// function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//          const {loading,sortedRooms,rooms} = value;
//          if(loading) {
//              return <Loading />
//          }
//         return (
//           <div>
//             <RoomFilter rooms={rooms}/>
//             <RoomList rooms={sortedRooms}/>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
