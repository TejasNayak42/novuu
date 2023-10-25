import React from "react";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "Login": {
      return {
        currentUser: action.payload,
      };
    }
    case "LogOut": {
      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
