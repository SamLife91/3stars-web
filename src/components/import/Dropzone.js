import React, { useCallback, useState, useContext, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import axios from 'axios';

import FolderSVG from '@material-ui/icons/Folder';
import { ImportContext } from '../../context/TDImportContext';
import { UIcontext } from '../../context/UIcontext';

const Dropzone = () => {
  const [isUploaded, setUploaded] = useState(false);
  const context = useContext(ImportContext);
  const { upload } = context;
  const uictx = useContext(UIcontext);
  const { setFile } = uictx;
  const onDrop = useCallback(acceptedFile => {
    console.log(acceptedFile);
    let fdata = new FormData();
    fdata.append('file', acceptedFile[0], acceptedFile[0].name);
    console.log(fdata);
    const opt = {
      method: 'POST',
      url: 'http://31.13.251.24:4000/api/post_file',
      data: fdata,
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    };
    axios(opt).then(res => {
      console.log(res);
      if (res.status === 200) {
        setFile(true);
        setUploaded({ isUploaded: true });
        upload(res.data);
      }
      console.log(res.data);
    });
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
    accept: '.doc, .txt',
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
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignSelf: 'center'
      }}
    >
      <div
        {...getRootProps()}
        style={{
          borderRadius: 8,
          padding: 0,
          padding: '4.5vh',
          display: 'flex',
          height: '35vh',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: `repeating-linear-gradient(
  45deg,
  #606dbc,
  #606dbc 10px,
  #465298 10px,
  #465298 20px)`,
          cursor: 'pointer'
        }}
      >
        <FolderSVG style={{ fontSize: 52, color: '#fff' }} />
        <input {...getInputProps()} />
        {isDragAccept && (
          <p style={{ color: '#fff' }}>All files will be accepted</p>
        )}
        {isDragReject && (
          <p style={{ color: '#fff' }}>Some files will be rejected</p>
        )}
        {!isDragActive && (
          <p style={{ color: '#fff' }}>Drop some files here ...</p>
        )}
      </div>
      {(() => {
        if (acceptedFiles.length) {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '3.5vh'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'inherit',
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center'
                  }}
                >
                  <div style={{ flex: 3, textAlign: 'left' }}>
                    {acceptedFiles.map(el => el.path)}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      alignSelf: 'flex-end',
                      textAlign: 'right'
                    }}
                  >
                    <CheckCircleOutline
                      style={{ color: isUploaded ? 'green' : 'grey' }}
                    />
                  </div>
                </div>
                <Divider />
                <div style={{ flex: 1 }}>
                  {!isUploaded ? <LinearProgress /> : <Divider />}
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
