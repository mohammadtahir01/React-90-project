import { configureStore } from "@reduxjs/toolkit";
import my from "./todoSlice"

const Store =configureStore({
    reducer:{
        todo:my
    }
})
export default Store;