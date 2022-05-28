// import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 
// import usersReducer from "../features/userSlice";

// export default configureStore({
//     reducer:{
//         user:usersReducer,
//     }
// })

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import usersReducer from "../features/userSlice";
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, usersReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export   { store, persistor }