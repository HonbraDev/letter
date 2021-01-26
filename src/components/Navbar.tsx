import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import QuillToolbar from "./Toolbar";
import Folders from "./Folders";
import {
  AppBar,
  Toolbar,
  IconButton,
  useScrollTrigger,
} from "@material-ui/core";
import { FormatListBulletedOutlined } from "@material-ui/icons";
import FileMenu from "./FileMenu";

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

function Navbar(props: {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  const classes = useStyles();
  const [foldersOpen, setFoldersOpen] = useState(false);
  const [fileMenuOpen, setFileMenuOpen] = useState(false);
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 1,
  });

  useEffect(() => {}, []);

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        className={classes.appbar}
        elevation={trigger ? 4 : 0}
      >
        <Toolbar className={classes.toolbar}>
          <Folders value={props.value} setValue={props.setValue} />
          <QuillToolbar />
          <FileMenu value={props.value} setValue={props.setValue} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
