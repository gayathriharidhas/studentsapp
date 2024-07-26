import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableCell, TableHead, TableRow, TableBody, Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var [emp, setemp] = useState([])
    var navigate = useNavigate()
    
    useEffect(() => {
        axios.get("http://localhost:3005/view")
            .then((res) => {
                setemp(res.data)
                console.log(res.data)
            })
            .catch((err) => { console.log(err) })
    }, [])
    
    const delvalue = (id) => {
        console.log(id)
        axios.delete("http://localhost:3005/remove/" + id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
    
            })
    }


    const updatevalue = (r) => {
        console.log("updated")
        navigate('/add', { state:{r}})
    }
    
    return (
     
          
      <div>
          <h2>Employee </h2>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>Department</TableCell>
                          <TableCell>Salary</TableCell>
                      </TableRow>
                  </TableHead>
                    <TableBody>
                        {emp.map((r) => {
                            return (
                                <TableRow>

                                    <TableCell >{r.Name}</TableCell>
                                    <TableCell >{r.Age}</TableCell>
                                    <TableCell >{r.Dept}</TableCell>
                                    <TableCell >{r.Sal}</TableCell>

                                    <TableCell >
                                        <Button variant='contained' size='small' color='primary'
                                            onClick={() => {
                                                updatevalue(r)
                                            }}
                                        >Update</Button>
                                    </TableCell>

                                    <TableCell >
                                        <Button variant='contained' size='small' color='primary'
                                            onClick={() => {
                                                delvalue(r._id)
                                            }}
                                        >Delete</Button>
                                    </TableCell>


                                </TableRow>
                                
                            )

                            
                            
                        })}
                              
                          
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default View