import { GET_LIST, DELETE_ITEMS, ADD_ITEMS } from "./types.js";

export const getList = list => {
  return {
    type: GET_LIST,
    payload: list
  };
};

export const deleteItems = id => {
  return {
    type: DELETE_ITEMS,
    payload: id
  };
};

export const addItems = id => {
  return {
    type: ADD_ITEMS,
    payload: id
  };
};
