import React, { useState } from 'react'

const UserEvent = ({email, handleClick}) => {
    const [value, setValue] = useState('')
    const [name, setName] = useState('')
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>  setValue("hello")}>click me</button>
        <h4>{name}</h4>
        <input type='text' onChange={()=> setName("sushant")} />
        <h3>{email}</h3>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UserEvent