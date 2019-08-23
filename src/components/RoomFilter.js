import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomFilter({rooms}) {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  let types = getUnique(rooms,"type");

  types = ["all",...types];

  // To JSX

  types=types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
  })

  let people = getUnique(rooms,"capacity");
  people = people.map((item,index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (
    <section className="searchSection">
      <Title title="Search Rooms" />
      <form className="filterForm">
        {/* Type of room */}
        <div className="formGroup">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} className="formSelect" onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* Guests */}
        <div className="formGroup">
          <label htmlFor="capacity">guests</label>
          <select name="capacity" id="capacity" value={capacity} className="formSelect" onChange={handleChange}>
            {people}
          </select>
        </div>
        {/* Price */}
        <div className="formGroup">
          <label htmlFor="price">room price ${price}</label>
          <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="formSelect"></input>
        </div>
        {/* Size */}
        <div className="formGroup">
          <label htmlFor="size">room size</label>
          <div className="sizeInput">
          <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="formSelect"></input>
          <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="formSelect"></input>
          </div>
        </div>
        {/* Extras */}
        <div className="formGroup">
          <div className="extras">
            <div>
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} className="formSelect"></input>
          <label htmlFor="breakfast">breakfast</label>
            </div>
          <div>
          <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} className="formSelect"></input>
          <label htmlFor="pets">pets</label>
          </div>
          
          </div>
        </div>
      </form>
    </section>
  );
}

export default RoomFilter;
