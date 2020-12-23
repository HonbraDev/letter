import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { openFile, saveFile } from "../functions/editor";
import QuillToolbar from "./Toolbar";
import Folders from "./Folders";
import {
  AppBar,
  Toolbar,
  IconButton,
  useScrollTrigger,
} from "@material-ui/core";
import {
  FormatListBulletedOutlined,
  SettingsOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles({
  appbar: {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "white",
  },
  toolbar: {
    overflowX: "auto",
  },
});

function Navbar() {
  const classes = useStyles();
  const [foldersOpen, setFoldersOpen] = useState(false);
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 1,
  });

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="transparent"
        className={classes.appbar}
        elevation={trigger ? 4 : 0}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setFoldersOpen(!foldersOpen)}
          >
            <FormatListBulletedOutlined />
          </IconButton>
          <QuillToolbar />
          <IconButton edge="end" color="inherit">
            <SettingsOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Folders open={foldersOpen} setOpen={setFoldersOpen} />
    </React.Fragment>
  );
}

export default Navbar;
