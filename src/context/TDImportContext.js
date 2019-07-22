import React, { useContext, createContext, useReducer, useState } from "react";
export const ImportContext = React.createContext();

export const ImportProvider = props => {
  const [state, setState] = useState({
    activeIndex: 0,
    deals: [
      {
        type: "type1",
        booking: "1234",
        terms: "paid",
        customer: "cust1",
        shipper: "shipper1",
        consignee: "const1",
        notifyparty: "notp1",
        pol: "pol1",
        pod: "pod1",
        td: "2017-05-24",
        transshipment: "country",
        port: "port1",
        pod: "pod1"
      },
      {
        type: "type2",
        booking: "1234",
        terms: "paid",
        customer: "cust2",
        shipper: "shipper2",
        consignee: "cons2",
        notifyparty: "notp2",
        pol: "pol2",
        pod: "pod2",
        td: "2017-05-24",
        transshipment: "country",
        port: "port2",
        pod: "pod2"
      },
      {
        type: "type3",
        booking: "1234",
        terms: "paid",
        customer: "cust3",
        shipper: "shipper3",
        consignee: "cons3",
        notifyparty: "notp3",
        pol: "pol3",
        pod: "pod3",
        td: "2017-05-24",
        transshipment: "country",
        port: "port3",
        pod: "pod3"
      },
      {
        type: "type4",
        booking: "1234",
        terms: "paid",
        customer: "cust4",
        shipper: "shipper4",
        consignee: "cons4",
        notifyparty: "notp4",
        pol: "pol4",
        pod: "pod4",
        td: "2017-05-24",
        transshipment: "country",
        port: "port4",
        pod: "pod4"
      }
    ]
  });
  const count = () => {
    setState({ ...state, activeIndex: state.activeIndex + 1 });
  };

  const updateRow = (index, args) => {
    const mergeInputRes = (value, field) => {
      value === "" ? state.deals[index][field] : value;
      if (value === "") {
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
        index: state.activeIndex,
        deals: state.deals,
        count: count,
        row: state.deals[state.activeIndex],
        update: updateRow
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
