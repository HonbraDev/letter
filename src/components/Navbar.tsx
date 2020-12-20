import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { openFile, saveFile } from "../functions/editor";
import QuillToolbar from "./Toolbar";
import Folders from "./Folders";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
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
});

function Navbar(props: {
  foldersOpen: boolean;
  setFoldersOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static" color="transparent" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => props.setFoldersOpen(!props.foldersOpen)}
          >
            <FormatListBulletedOutlined />
          </IconButton>
          <QuillToolbar />
          <IconButton edge="end" color="inherit">
            <SettingsOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Folders open={props.foldersOpen} setOpen={props.setFoldersOpen} />
    </React.Fragment>
  );
}

export default Navbar;
