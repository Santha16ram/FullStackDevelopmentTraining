import React, { useState } from 'react'

function Registration() {
    const[formdata, setformdata] = useState({username : ''})

    // console.log(formdata)

    function handleChange(e) {
        setformdata({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formdata)
        alert(`Form submitted with username: ${formdata.username}`)
    }

    return (
        <div>
            <h2>Registration Form</h2>

            <form action="" >
                <input 
                type="text" 
                name='username' 
                value={formdata.username}
                onChange={handleChange}
                placeholder='Enter username' />
                <br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}


export default Registration
