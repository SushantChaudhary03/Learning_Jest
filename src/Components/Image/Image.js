import React,{useState} from 'react'

const Image = ()=>{
    const [data, setData] = useState('')
    const [count, setCount] = useState(0)
    return(
        <div>
            <img title='treeImage' style={{width: '10vw'}} src='https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            <input name='username' id='userId'type='text' placeholder='Enter your username'/>
            <input name='name' value={data} placeholder='Enter your name' onChange={(e)=> setData(e.target.value)}/>
            <br/>
            <div>
            <span data-testid='count'>{count}</span>
            <button onClick={()=> setCount(count+1)} style={{margin: "10px"}}>+</button>
            
            </div>
        </div>
    )
}

export default Image