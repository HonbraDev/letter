import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Drawer,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import { FileCopyOutlined } from "@material-ui/icons";
import downloadFile from "../functions/downloadFile";

const useStyles = makeStyles({
  root: {},
  dropArea: {
    padding: 16,
    border: "2px dashed gray",
    margin: 16,
    width: 215,
    textAlign: "center",
  },
  title: {
    margin: 16,
    marginBottom: 0,
    marginTop: 10,
  },
  saveBtn: {
    margin: 16,
    width: "calc(100% - 32px)",
    marginTop: 10,
    marginBottom: 10,
  },
  currentPath: {
    margin: 16,
    marginTop: 0,
    marginBottom: 10,
  },
  fileName: {
    marginTop: 0,
  },
});

function FileMenu(props: {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        const raw = await acceptedFiles[0].text();
        const document = JSON.parse(raw);
        if ("ops" in document) {
          props.setValue(document);
        } else {
          throw new TypeError("Invalid File Type");
        }
      } catch (e) {
        console.error(e);
      }
    },
    [props]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <IconButton edge="end" color="inherit" onClick={() => setOpen(true)}>
        <FileCopyOutlined />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Typography variant="h6" className={classes.title}>
          Open file
        </Typography>
        <div className={classes.dropArea} {...getRootProps()}>
          <input {...getInputProps()} />

          {isDragActive ? (
            <Typography variant="body1">Drop the file here.</Typography>
          ) : (
            <Typography variant="body1">
              Drag and drop the file here or click to browse.
            </Typography>
          )}
        </div>
        <Divider />
        <Typography variant="h6" className={classes.title}>
          Save file (beta)
        </Typography>
        <Button variant="contained" className={classes.saveBtn}>
          Save
        </Button>
        <Typography variant="body2" className={classes.currentPath}>
          Current path: none
        </Typography>
        <Divider />
        <Typography variant="h6" className={classes.title}>
          Download file
        </Typography>
        <Button
          variant="contained"
          className={classes.saveBtn}
          onClick={() => {
            downloadFile(JSON.stringify(props.value), "letterdoc.json");
          }}
        >
          Download
        </Button>
      </Drawer>
    </>
  );
}

export default FileMenu;
