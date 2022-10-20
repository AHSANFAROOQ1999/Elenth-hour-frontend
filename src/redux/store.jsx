// Library Imports

// ⬇ The following Library Imports is for Sync Redux States across Browsers Tabs.

import storage from "redux-persist/lib/storage";
import { legacy_createStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "@reduxjs/toolkit";
import { createStateSyncMiddleware } from "redux-state-sync";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";

// ⬇ Slices Imports

import accountReducer from "./Slices/accountSlice";

// ⬇ Do this if you want to Retain State Values on Reload.

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  accountSlice: accountReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(
      createStateSyncMiddleware({
        blacklist: ["persist/PERSIST", "persist/REHYDRATE"],
      })
    )
  )
);

export default store;
