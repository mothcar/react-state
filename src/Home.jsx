// import { useState } from "react";
import { users } from './store/userStore.js'
import { useHotel } from './store/hotelStore'

export default function Home() {
  // const [name, setName] = useState("");

  const {name, setName} = users((state)=>({
    name : state.name,
    setName: state.nameSetting
  }))

  const {hotelName, setHotel} = useHotel((state)=>({
    hotelName : state.hotel,
    setHotel : state.setHotel
  }))

  function handleChange(event) {
    setName(event.target.value)
    console.log('event.target.value : ', event.target.value)
  }

  function hotelnameChange(e) {
    setHotel(e.target.value)
    console.log('event.target.value : ', e.target.value)
  }

  function handleSubmit(event) {
    setName(name)
    alert('A name was submitted: ' + name);
    event.preventDefault();
  }

  function hotelhandleSubmit(e) {
    alert('A name was submitted: ' + hotelName);
    setHotel(hotelName)
    e.preventDefault()
  }

  return (
    <>
      <div>Home</div>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input name="myInput" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <form onSubmit={hotelhandleSubmit}>
        <label>
          Hotel : 
          <input name="myInput2"  value={hotelName} onChange={hotelnameChange}/>
        </label>
        <input type="submit" value="Hotel name" />
      </form>

      <div>{hotelName}</div>
    </>
  );
}
