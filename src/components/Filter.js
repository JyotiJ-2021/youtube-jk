import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Popper } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemAvatar } from '@mui/material';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import FilterOption from './FilterOption';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Filter = () => {

  let { type } = useParams();
  const [videos, setVideos] = useState()

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event, id) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const filter = encodeURIComponent(JSON.stringify({ type: type }));

  useEffect(() => {
    const fetchVideoById = async () => {
      fetch(` https://academics.newtonschool.co/api/v1/ott/show?filter=${filter}`, {
        method: 'GET',
        headers: {
          // Authorization: 'Bearer YOUR_JWT_TOKEN',  
          ProjectId: "f104bi07c490"
        }
      })
        .then(response => response.json())
        .then(data => setVideos(data.data))
        .catch(error => console.error('Error:', error))

    };
    fetchVideoById();
  }, [type]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Img = styled('img')({
    width: " 50px",
    height: "50px",
    borderRadius: "50%",
    border: "1px solid lightgrey"
  });

  const handleWatchLater = (id) => {
    fetch(`https://academics.newtonschool.co/api/v1/ott/watchlist/like`, {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWFlZjIwOTI5YjliMTBjMDMzMjczZiIsImlhdCI6MTY5NjI2Mzk2OCwiZXhwIjoxNzI3Nzk5OTY4fQ.JGibk-X68Hl3eAGbiVpBBORS3gG5mRtuB8rm1Tjzgmc',
        ProjectId: "f104bi07c490"
      },
      body: {
        "showId": id
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))

      .catch(error => console.error('Error:', error))

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FilterOption />
      <Grid container spacing={2}>
        {videos && videos.map((item, i) => {
          return <Grid item xs={12} sm={6} md={4} key={item._id} style={{ position: "relative" }} >
            <Link to={`/watch/${item._id}`}>
              <Item>
                <ReactPlayer url={item.video_url} width='100%'
                  height='100%' />
                <ListItem style={{ alignItems: "flex-start" }}>
                  <ListItemAvatar>
                    <Img alt="complex" src={item.thumbnail} />
                  </ListItemAvatar>
                  <ListItemText primary={<>
                    <Typography className="description">{item.description}</Typography>
                    <Typography className='title'>{item.title}</Typography>
                    <Typography style={{ fontSize: "14px", fontWeight: "500", }}>146K views | 2 years ago</Typography>
                  </>} />

                </ListItem>
              </Item>
            </Link>
            <MoreVertIcon onClick={(e) => handleOpen(e, item._id)} style={{ position: "absolute", zIndex: "9", right: "0px", bottom: "87px", color: "grey", cursor: "pointer" }} />
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }} onClick={() => handleWatchLater(item._id)}>
                Watch Later
              </Box>
            </Popper>
          </Grid>
        })}

      </Grid>
    </Box>
  )
}

export default Filter