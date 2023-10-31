import { Button, ButtonGroup, Card, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import DownloadIcon from "@mui/icons-material/Download";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SyncIcon from "@mui/icons-material/Sync";
const Playlist = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchWatchLater = () => {
      fetch(`https://academics.newtonschool.co/api/v1/ott/watchlist/like`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWFlZjIwOTI5YjliMTBjMDMzMjczZiIsImlhdCI6MTY5NjI2Mzk2OCwiZXhwIjoxNzI3Nzk5OTY4fQ.JGibk-X68Hl3eAGbiVpBBORS3gG5mRtuB8rm1Tjzgmc",
          ProjectId: "f104bi07c490",
        },
      })
        .then((response) => response.json())
        .then((data) => setVideos(data.data.shows))

        .catch((error) => console.error("Error:", error));
    };
    fetchWatchLater();
  }, []);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3}>
        <div
          style={{
            padding: "15px 12px",
            background:
              "linear-gradient(to bottom, rgba(90,90,90,0.800) 0%, rgba(90,90,90,0.298) 33%, rgba(90,90,90,0.800) 100%)",
            borderRadius: "8px",
          }}
        >
          {videos.length > 0 && (
            <>
              <img src={videos[0].thumbnail} alt="thumbnail" height={"300px"} />
              <Typography
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  marginTop: "8px",
                  lineHeight: 1,
                  color: "#fff",
                  fontSize: "16px",
                }}
              >
                Watch Later
              </Typography>
              <Typography
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                {videos[0].director}
              </Typography>
              <Typography
                style={{
                  textAlign: "left",
                  fontWeight: "600",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                1 videos No views updated Today
              </Typography>
              <Typography
                style={{ textAlign: "left", color: "#fff", marginTop: "10px" }}
              >
                {" "}
                <DownloadIcon /> <MoreVertIcon />{" "}
              </Typography>
              <ButtonGroup style={{ gap: "12px" }}>
                <Button
                  style={{
                    background: "#fff",
                    textAlign: "left",
                    fontWeight: "600",
                    color: "#444",
                    marginTop: "10px",
                    fontSize: "12px",
                    outline: "none",
                    border: "none",
                    borderRadius: "25px",
                  }}
                >
                  <PlayArrowIcon /> Play All
                </Button>
                <Button
                  style={{
                    background: "#fff",
                    textAlign: "left",
                    fontWeight: "600",
                    color: "#444",
                    marginTop: "10px",
                    fontSize: "12px",
                    outline: "none",
                    border: "none",
                    borderRadius: "25px",
                  }}
                >
                  <SyncIcon /> Shuffle
                </Button>
              </ButtonGroup>{" "}
            </>
          )}
        </div>
      </Grid>
      <Grid item xs={12} md={9}>
        {videos.map((item, i) => {
          return (
            <Card style={{ display: "flex", padding: "10px" }}>
              <ReactPlayer
                url={item.video_url}
                width="250px"
                thumbnail={item.thumbnail}
                height="100px"
              />
              <Typography style={{ textAlign: "left", padding: "10px" }}>
                <Typography style={{ fontSize: "16px", fontWeight: "600" }}>
                  {item.description}
                </Typography>
                <Typography style={{ fontSize: "12px", color: "grey" }}>
                  {item.director} .304K views .6 months ago
                </Typography>
              </Typography>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Playlist;
