import React, { useContext, createContext, useReducer, useState } from 'react';
export const ImportContext = React.createContext();
export const ImportProvider = props => {
  const [state, setState] = useState({
    // activeIndex: 0,
    deals: []
  });
  const [index, setIndex] = useState(0);
  const [instruction, setInstruction] = useState({
    ship: {}
  });
  const uploadFile = file => {
    if (file) {
      state.deals = file.shipment_informations;
      instruction.ship = file.shipment_instruction;
      console.log(instruction.ship);
      setState({ ...state, ...state.deals });
      setInstruction({ ...instruction.ship });
    }
  };
  const count = type => {
    let curr = index;
    type === 'decrement' ? curr-- : curr++;
    setIndex(curr);
  };

  const updateRow = (index, args) => {
    const mergeInputRes = (value, field) => {
      value === '' ? state.deals[index][field] : value;
      if (value === '') {
        return state.deals[index][field];
      } else {
        return value;
      }
    };
    let newObj = Object.assign(
      ...Object.entries(args).map(([k, v]) => ({
        [k]: mergeInputRes(v, k)
      }))
    );
    console.log(newObj);
    state.deals[index] = newObj;
    setState({
      ...state,
      ...state.deals[index]
    });
  };
  return (
    <ImportContext.Provider
      value={{
        index: index,
        deals: state.deals,
        count: count,
        row: state.deals[index],
        update: updateRow,
        upload: uploadFile,
        instruction: instruction
      }}
    >
      {props.children}
    </ImportContext.Provider>
  );
};

// export const ImportReducer = (state, action) => {
//   switch (action.type) {
//     case "GET_DATA":
//       return state;
//     case "GET_ACTIVE_DATA_ITEM":
//       return state;
//     case "SET_ACTIVE_DATA_ITEM":
//       return state;
//     case "EDIT_ACTIVE_DATA_ITEM":
//       return state;
//     default:
//       return state;
//   }
// };
