import React from 'react'

export function Checkbox({ checked, onChange }) {
  return <input element-id='test-checkbox' type="checkbox" checked={checked} onChange={onChange} />;
}

const UI = ()=>{
    return(
        <div>
            <button></button>
            <button></button>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <div>
                <label htmlFor='student'>Student Name</label>
                <input id='student' type='text' defaultValue={"name"} />

                <label htmlFor='check-box'>check box</label>
                <input type='checkbox' id='check-box' defaultChecked={true} />
            </div>

            <div>
                <label htmlFor='username1'>username</label>
                <input  id='username1' type='text'/>

                <label htmlFor='username2'>username</label>
                <input type='number' id='username2' />
            </div>
            <div element-id="hello">hello</div>
        </div>
    )
}

export default UI