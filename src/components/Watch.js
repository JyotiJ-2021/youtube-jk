import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import FilterOption from "./FilterOption";
const Watch = () => {
  let { id } = useParams();
  console.log(id);
  const [videos, setVideos] = useState();
  useEffect(() => {
    const fetchVideoById = async () => {
      fetch(`https://academics.newtonschool.co/api/v1/ott/show/${id}`, {
        method: "GET",
        headers: {
          // Authorization: 'Bearer YOUR_JWT_TOKEN',
          ProjectId: "f104bi07c490",
        },
      })
        .then((response) => response.json())
        .then((data) => setVideos(data.data))
        .catch((error) => console.error("Error:", error));
    };
    fetchVideoById();
  }, [id]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    padding: "0 6px",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FilterOption />
      {videos && (
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Item>
              <ReactPlayer
                url={videos.video_url}
                style={{ borderRadius: "5px" }}
              />
            </Item>

            <Typography
              style={{
                textAlign: "left",
                marginTop: "10px",
                fontWeight: "500",
              }}
            >
              {videos.description}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            View More
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Watch;
