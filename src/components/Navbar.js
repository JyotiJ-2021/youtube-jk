import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Drawer from "@mui/material/Drawer";
import Sidebar from "./Sidebar";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openRightDrawer, setOpenRightDrawer] = useState(false);
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin")) === true
  );

  const user = JSON.parse(localStorage.getItem("yuser")) || "";

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  const toggleRightDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenRightDrawer(!openRightDrawer);
  };

  const handleLogout = () => {
    localStorage.setItem("isLogin", false);
    setIsLogin(false);

    navigate("/");
  };

  return (
    <>
      <div className="nav">
        <div className="left">
          {" "}
          <MenuIcon />
          <img
            src="https://www.gstatic.com/youtube/img/promos/growth/b5bebe6c7c48dddb2fb8c605559aac17ebbb1cbb5d3119342d54a830a9a2bbb2_244x112.webp"
            alt="icon"
          />
        </div>
        <div className="middle">
          <input type="text" placeholder="Search" />
          <div className="search">
            <Tooltip title="Search">
              <SearchIcon className="searchicon" />
            </Tooltip>
          </div>
          <div className="mic">
            <Tooltip title="Search with your voice">
              <MicIcon />
            </Tooltip>
          </div>
        </div>
        <div className="right">
          <AccountCircleOutlinedIcon
            onClick={() => setOpenRightDrawer(!openRightDrawer)}
          />
        </div>
      </div>
      <div className="mb_nav">
        <MenuIcon onClick={() => setOpen(!open)} />
        <img
          src="https://www.gstatic.com/youtube/img/promos/growth/b5bebe6c7c48dddb2fb8c605559aac17ebbb1cbb5d3119342d54a830a9a2bbb2_244x112.webp"
          alt="icon"
        />
        <AccountCircleOutlinedIcon
          onClick={() => setOpenRightDrawer(!openRightDrawer)}
        />
      </div>
      <Drawer
        anchor={"left"}
        open={open}
        onClose={toggleDrawer()}
        sx={{ width: "220px" }}
      >
        <Sidebar />
      </Drawer>
      <Drawer
        anchor={"right"}
        open={openRightDrawer}
        onClose={toggleRightDrawer()}
        sx={{
          width: "220px",
        }}
      >
        {isLogin ? (
          <List style={{ padding: "20px 5px" }}>
            <ListItem> {user.email} </ListItem>
            <ListItem handleLogout={handleLogout}> Sign Out </ListItem>
          </List>
        ) : (
          <List style={{ padding: "20px 5px" }}>
            <ListItem>
              <Link to="/signin">Sign In</Link>{" "}
            </ListItem>
          </List>
        )}
      </Drawer>
    </>
  );
};

export default Navbar;
