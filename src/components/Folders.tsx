import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import {
  ExpandLess,
  ExpandMore,
  FolderOutlined,
  DescriptionOutlined,
  Add,
} from "@material-ui/icons";

const useStyles = makeStyles({
  drawer: {},
  list: {
    width: 250,
  },
  file: {
    paddingLeft: 30,
  },
});

function Folders(props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const classes = useStyles();

  const toggleDrawer = () => props.setOpen(!props.open);

  return (
      <Drawer
        anchor="left"
        open={props.open}
        onClose={toggleDrawer}
        className={classes.drawer}
      >
        <List className={classes.list}>
          <ListSubheader>Your folders and documents</ListSubheader>
          <FolderItem
            name="Homework"
            documents={["Biology", "Geography", "Maths", "Physics"]}
          />
          <FolderItem
            name="Homework"
            documents={["Biology", "Geography", "Maths", "Physics"]}
          />
          <ListItem button>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Create new folder" />
          </ListItem>
        </List>
      </Drawer>
  );
}

function FolderItem(props: { name: string; documents: Array<string> }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <FolderOutlined />
        </ListItemIcon>
        <ListItemText primary={props.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto">
        <List disablePadding>
          {props.documents.map((document) => (
            <FileItem name={document} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
}

function FileItem(props: { name: string }) {
  const classes = useStyles();

  return (
    <ListItem button className={classes.file}>
      <ListItemIcon>
        <DescriptionOutlined />
      </ListItemIcon>
      <ListItemText primary={props.name} />
    </ListItem>
  );
}

export default Folders;
