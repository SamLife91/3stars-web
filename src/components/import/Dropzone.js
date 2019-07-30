import React, { useCallback, useState, useEffect, createRef } from "react";
import { useDropzone } from "react-dropzone";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";

import FolderSVG from "@material-ui/icons/Folder";

const Dropzone = () => {
  const [isUploaded, setUploaded] = useState(false);
  const onDrop = useCallback(acceptedFile => {
    console.log(acceptedFile);
    setTimeout(() => {
      console.log("async");
      setUploaded({ isUploaded: true });
    }, 5000);
  }, []);
  const onClick = useCallback(acceptedFile => {
    // file upload
    open;
    console.log("clicked");
  }, []);
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept
  } = useDropzone({
    onDrop,
    accept: ".doc, image/*",
    open,
    noClick: false,
    noKeyboard: true
  });
  console.log(useDropzone);
  return (
    <Paper
      elevation={12}
      style={{
        display: "flex",
        width: "50%",
        padding: "5px 10px",
        alignSelf: "center",
        margin: "0 auto"
      }}
      maxWidth={false}
    >
      <div
        {...getRootProps()}
        style={{
          borderRadius: "50%",
          padding: 0,
          height: "250px",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: `repeating-linear-gradient(
  45deg,
  #606dbc,
  #606dbc 10px,
  #465298 10px,
  #465298 20px)`,
          cursor: "pointer"
        }}
      >
        <FolderSVG style={{ fontSize: 52, color: "#fff" }} />
        <input {...getInputProps()} />
        {isDragAccept && (
          <p style={{ color: "#fff" }}>All files will be accepted</p>
        )}
        {isDragReject && (
          <p style={{ color: "#fff" }}>Some files will be rejected</p>
        )}
        {!isDragActive && (
          <p style={{ color: "#fff" }}>Drop some files here ...</p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flex: 2,
          justifyContent: "center",
          flexDirection: "column",
          padding: "15px 15px"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "inherit",
              flexDirection: "row",
              flex: 1,
              alignItems: "center"
            }}
          >
            <div style={{ flex: 3, textAlign: "left" }}>File Name</div>
            <div style={{ flex: 1, alignSelf: "flex-end", textAlign: "right" }}>
              <CheckCircleOutline
                style={{ color: isUploaded ? "green" : "grey" }}
              />
            </div>
          </div>
          <Divider />
          <div style={{ flex: 1 }}>
            <LinearProgress />
          </div>
        </div>

        {acceptedFiles.map(el => el.path)}
        {isDragAccept && <LinearProgress />}

        {/* <Button type="button" variant="contained" onClick={() => onClick()}>
          Default
        </Button> */}
      </div>
    </Paper>
  );
};

export default Dropzone;
