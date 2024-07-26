import React, { useEffect, useMemo, useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = (props) => {
    var [inputs, setinputs] = useState({ Name: "", Age: "", Dept: "", Sal: "" })
    var location = useLocation()
    var navigate = useNavigate()
    console.log("loc", location.state)
    
    const inputhandler = (e) => {
        setinputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(inputs)
    }

    const addhandler = (e) => {
        console.log("clicked")
        
        if (location.state == null) {
            axios.post("http://localhost:3005/add", inputs)
                .then((res) => {
                    console.log(res)
                    alert(res.data.message)
                    navigate('/view')
                })
        }
        else {
            axios.put("http://localhost:3005/update/"+location.state._id, inputs)
                .then((res) => {
                    console.log(res)
                    alert(res.data.message)
                    navigate('/view')
                })
        }
    }


        useEffect(() => {
            if (location.state !== null) {
                setinputs({
                    ...inputs,
                    Name: location.state.r.Name,
                    Age: location.state.r.Age,
                    Dept: location.state.r.Dept,
                    Sal: location.state.r.Sal,
                })
    
            }
        }, [])
     

    
  return (
      <div>
          <h1>Add details</h1>
          
          <form method='post' action=''>
              
              <TextField label="name" id="" variant='outlined' name="Name" value={inputs.Name} onChange={inputhandler}/><br /><br />
              <TextField label="age" id="" variant='outlined' name="Age" value={inputs.Age} onChange={inputhandler} /><br /><br />
              <TextField label="department" id="" variant='outlined' name="Dept" value={inputs.Dept} onChange={inputhandler} /><br /><br />
              <TextField label="salary" id="" variant='outlined' name="Sal" value={inputs.Sal} onChange={inputhandler} /><br /><br />
              <Button variant="contained" onClick={addhandler}>submit</Button>

            </form>
              
          
          

    </div>
  )
}

export default Add