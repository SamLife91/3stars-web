import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import FolderSVG from "@material-ui/icons/Folder";

const Dropzone = () => {
  const onDrop = useCallback(acceptedFile => {
    // file upload
    console.log(acceptedFile);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept
  } = useDropzone({ onDrop });
  return (
    <div
      {...getRootProps()}
      style={{
        padding: 0,
        height: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `repeating-linear-gradient(
  45deg,
  #606dbc,
  #606dbc 10px,
  #465298 10px,
  #465298 20px)`
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
  );
};

export default Dropzone;
