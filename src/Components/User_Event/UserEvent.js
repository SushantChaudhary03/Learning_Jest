import React, { useState } from 'react'

const UserEvent = () => {
    const [value, setValue] = useState('')
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>  setValue("hello")}>click me</button>
    </div>
  )
}

export default UserEvent