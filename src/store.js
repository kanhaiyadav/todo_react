import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Redux/RootReducer";

import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
    reducer: rootReducer,
});


const persistor = persistStore(store);



export {store, persistor};