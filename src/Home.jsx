import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value)
    // console.log('Name : ', name)
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
