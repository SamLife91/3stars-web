import React, { createContext, useState, useEffect, setState } from "react";

export const UIcontext = createContext({
  fw: false
});

export const UiProvider = props => {
  const [fw, setfw] = useState(false);
  const toggle = () => {
    setfw(!fw);
  };
  return (
    <UIcontext.Provider
      value={{
        fw: fw,
        toggle: toggle
      }}
    >
      {props.children}
    </UIcontext.Provider>
  );
};

export const UiConsumer = UIcontext.Consumer;
