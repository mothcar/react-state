// import { useState } from "react";
import { users } from './store/userStore.js'

export default function Home() {
  // const [name, setName] = useState("");

  const {name, setName} = users((state)=>({
    name : state.name,
    setName: state.nameSetting
  }))

  function handleChange(event) {
    setName(event.target.value)
    console.log('event.target.value : ', event.target.value)
  }

  function handleSubmit(event) {
    alert('A name was submitted: ' + name);
    event.preventDefault();
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
    </>
  );
}
