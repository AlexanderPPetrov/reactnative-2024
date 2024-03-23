import { configureStore } from "@reduxjs/toolkit";
import product from "@/redux/slices/product";
//TODO add more slices reducer

export default configureStore({
    reducer: {
        product,
        //TODO add more slices reducer
    }
})