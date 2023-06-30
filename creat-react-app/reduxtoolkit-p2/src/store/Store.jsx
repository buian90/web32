import { configureStore } from "@reduxjs/toolkit";
import CaculatorSlice from "../slice/CaculatorSlice";

const store = configureStore ({
    reducer : {
        caculator: CaculatorSlice // caculator là tên đặt gì cũng đc
    }
})
export default store