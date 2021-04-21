import * as Types from "./../constants/ActionType";

var initialState = [{}];

const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_RESTAURANT:
      state = action.data;
      return [...state];
    default:
      return [...state];
  }
};

export default restaurant;
