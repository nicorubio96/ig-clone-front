import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import postReducer from "./postReducer";



const reducers ={users : userReducer, posts : postReducer}



export const store =configureStore({
   reducer:reducers
})