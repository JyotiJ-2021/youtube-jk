 
import Grid from '@mui/material/Grid'; 
import React from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

const Layout = ({children}) => {
  return (
    <div className="App">
      <Navbar />
      <Grid container spacing={1} className="contain">

        <Grid item sm={2} xs={12} className="hide" style={{ padding: 20 }}>
          <Sidebar />
        </Grid>
        <Grid item sm={10} xs={12}  className="rightside">
         {children}
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout 