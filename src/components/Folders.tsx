import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  Typography,
} from "@material-ui/core";
import {
  ExpandLess,
  FormatListBulletedOutlined,
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
  title: {
    margin: 16,
    marginBottom: 0,
  },
  subtitle: {
    paddingTop: 0,
    lineHeight: 1,
    marginBottom: 10,
  },
});

function Folders(props: {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
        <FormatListBulletedOutlined />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        className={classes.drawer}
      >
        <Typography variant="h6" className={classes.title}>
          Folders
        </Typography>
        <List className={classes.list}>
          <ListSubheader className={classes.subtitle}>
            Your folders and documents
          </ListSubheader>
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
    </>
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
