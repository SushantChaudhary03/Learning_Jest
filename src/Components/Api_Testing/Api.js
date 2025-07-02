import React, { useEffect, useState } from 'react'

const Api = ()=>{
    const [data, setData] = useState([])

    useEffect(()=>{
        const userData = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            setData(data)
        }
        userData();
    }, [])

    return(
        <div>
            <h1>List of users</h1>
            <ul>
                {
                    data.map((user)=> <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    )
}

export default Api