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
        height: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <FolderSVG style={{ fontSize: 52 }} />
      <input {...getInputProps()} />
      {isDragAccept && <p>All files will be accepted</p>}
      {isDragReject && <p>Some files will be rejected</p>}
      {!isDragActive && <p>Drop some files here ...</p>}
    </div>
  );
};

export default Dropzone;
