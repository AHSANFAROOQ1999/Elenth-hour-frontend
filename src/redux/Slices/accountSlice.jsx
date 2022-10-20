import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "accountSlice",
  initialState: {
    loggedIn: sessionStorage.getItem("customer_id") ? true : false,
    customer_id: sessionStorage.getItem("customer_id")
      ? sessionStorage.getItem("customer_id")
      : null,
    customer_email: sessionStorage.getItem("customer_email")
      ? sessionStorage.getItem("customer_email")
      : null,
    customer_token: null,
  },
  reducers: {
    loginReducer: (state, action) => {
      debugger;
      state.customer_id = action.payload.data.id;
      sessionStorage.setItem("customer_id", action.payload.data.id);

      sessionStorage.setItem("customer_email", action.payload.data.email);
      state.customer_email = action.payload.data.email;

      state.customer_token = action.payload.data.token;

      state.loggedIn = true;
    },
    logoutReducer: (state) => {
      debugger;
      sessionStorage.removeItem("customer_id");
      sessionStorage.removeItem("customer_token");
      sessionStorage.removeItem("customer_email");

      state.loggedIn = false;

      state.customer_id = null;
      state.customer_email = null;
      state.customer_token = null;
    },
  },
});

export const { loginReducer, logoutReducer } = accountSlice.actions;
export default accountSlice.reducer;
