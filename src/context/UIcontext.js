import React, { createContext, useState, useEffect, setState } from 'react';

export const UIcontext = createContext({
  fw: false
});

export const UiProvider = props => {
  const [fw, setfw] = useState(false);
  const [isFileUp, setFileUp] = useState(false);
  const toggle = () => {
    setfw(!fw);
  };
  const upl = () => {
    setFileUp(!isFileUp);
  };
  return (
    <UIcontext.Provider
      value={{
        fw: fw,
        toggle: toggle,
        file: isFileUp,
        setFile: upl
      }}
    >
      {props.children}
    </UIcontext.Provider>
  );
};

export const UiConsumer = UIcontext.Consumer;
