import {configureStore} from "@reduxjs/toolkit"
import userDashboardReducer from "./userDashboardSlice.js"
import userReducer from "./userSlice.js"
const store = configureStore({
    reducer:{
        user: userReducer,
        userDashboard: userDashboardReducer,
    }
})

export default store;