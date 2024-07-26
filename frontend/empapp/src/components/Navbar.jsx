import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar,Toolbar,Typography,Button } from '@mui/material'


const Navbar = () => {
  return (
    <div>

      <AppBar>
        <Toolbar>
          <Typography varient='h6' sx={{ flexGrow: 1 }}>Employee App</Typography>&nbsp;&nbsp;&nbsp;
          <Link to='/add'><Button variant='contained' color='error' style={{ color: 'white' }}>ADD</Button></Link>
          <Link to='/view'><Button variant='contained' color='error' style={{ color: 'white' }}>VIEW</Button></Link>
        </Toolbar>
      </AppBar>

      <br /><br />          
    </div>
  
  )
}

export default Navbar 