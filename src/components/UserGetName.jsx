import React, { useState } from 'react'
import { addUsername } from '../localstorage/localstorageTodo';

function UserGetName() {
  const [name, setName] = useState("");

  console.log(name);
  const handleClick = (e) => {
    console.log("içerde")
    addUsername(name);
  }

  return (
    <div>
        <span>
          Kullanıcı adın
        </span>
        <input type="text" onChange={ch => setName(ch.target.value)}></input>
        <button onClick={(e => handleClick())}>Onayla</button>
    </div>
  )
}

export default UserGetName