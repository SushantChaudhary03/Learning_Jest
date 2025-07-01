import React, { useEffect, useState } from "react";

const Assertion = ()=>{
    const [data, setData] = useState(false)
    let login = true;
    useEffect(()=>{
        setTimeout(() => {
            setData(true)
        }, 500);
    })
    return(
        <div>
            <input id="employee" className="employee" name="employeeName" value='employee'/>
            <div id="hey">hey</div>
            <div>hello world</div>
            <div>{login? <button>login</button> : <button>logout</button>}</div>
            <div>{data ? <h1>data found</h1> : <h1>no data found</h1>}</div>
            <div className="elem">element</div>
            <div>
                container
                <div>hii</div>
                <div>bye</div>
            </div>
        </div>
    )
}

export default Assertion