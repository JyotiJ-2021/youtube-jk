import React from 'react'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemAvatar } from '@mui/material';

const style = {
  width: '100%',
  maxWidth: 280,
  bgcolor: 'background.paper',
};

const style1 = {
  flexDirection: "column",
  textAlign: "center"
}
const Sidebar = () => {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem sx={style1}>
      <a href="/">    <ListItemAvatar>
          <HomeSharpIcon />
        </ListItemAvatar>
        <ListItemText primary="Home" style={{ fontSize: "15px" }} /></a>
      </ListItem>

     
      <ListItem sx={style1}>
      <a href="/premium"> 
        <ListItemAvatar >
          <SubscriptionsSharpIcon />
        </ListItemAvatar>
        <ListItemText primary="YouTube Premium" />
        </a>
      </ListItem>

     
       <ListItem sx={style1}  >
       <a href="/watchlater"> 
        <ListItemAvatar>
          <VideoLibrarySharpIcon />
        </ListItemAvatar>
       <ListItemText primary="Watch Later"  /></a> 
      </ListItem>


    </List >
  )
}

export default Sidebar