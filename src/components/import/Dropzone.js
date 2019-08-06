import React, { useCallback, useState, useContext, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@material-ui/core/Divider";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";

import FolderSVG from "@material-ui/icons/Folder";
import { ImportContext } from "../../context/TDImportContext";

const Dropzone = () => {
  const [isUploaded, setUploaded] = useState(false);
  const context = useContext(ImportContext);
  const { upload } = context;
  const onDrop = useCallback(acceptedFile => {
    console.log(acceptedFile);
    setTimeout(() => {
      console.log("async");
      setUploaded({ isUploaded: true });
      upload();
    }, 5000);
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
  useEffect(() => {
    upload();
  }, []);
  return (
    <Paper
      elevation={12}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignSelf: "center"
      }}
    >
      <div
        {...getRootProps()}
        style={{
          borderRadius: 8,
          padding: 0,
          padding: "4.5vh",
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
      {(() => {
        if (acceptedFiles.length) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                padding: "3.5vh"
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
                  <div style={{ flex: 3, textAlign: "left" }}>
                    {acceptedFiles.map(el => el.path)}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      alignSelf: "flex-end",
                      textAlign: "right"
                    }}
                  >
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
            </div>
          );
        }
      })()}
    </Paper>
  );
};

export default Dropzone;
