import { createSlice } from "@reduxjs/toolkit";

const userDashboardSlice = createSlice({
    name: "userDashboard",
    initialState:{
        componentNumber: 3
    },
    reducers:{
        setComponentNumber:(state, action)=>{
            state.componentNumber = action.payload
        }
    }

});

// export const {toggleRequest, toggleNotice, toggleRoutine} = userDashboardSlice.actions;
export const {setComponentNumber} = userDashboardSlice.actions;
export default userDashboardSlice.reducer;