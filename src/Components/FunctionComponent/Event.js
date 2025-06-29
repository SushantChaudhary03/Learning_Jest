import React, {useState} from 'react'


const Event = ()=>{
    const [data, setData] = useState('')
    const handleClick = ()=>{
        setData("hello")
    }
    
    return(
        <div>
            <p data-testid ='data'>{data}</p>
            <button data-testid='btn' onClick={handleClick}>Click1</button>
            <button>Click2</button>
            <button>Click3</button>

            <label htmlFor='name'>Name:</label>
            <input id='name' />

            <label htmlFor='username'>Username:</label>
            <input id='username' />

            <label htmlFor='email'>Email:</label>
            <input id='email' />

            <div role='div1'>div1</div>
            <div role='div2'>div2</div>
        </div>
    )
}

export default Event