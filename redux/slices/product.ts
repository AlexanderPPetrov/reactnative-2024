import { createSlice } from "@reduxjs/toolkit";
import { ProductListType } from "@/types/product";

const product = createSlice({
    name: "product",
    initialState: {
        selectedProducts: [] as ProductListType
    },
    reducers: {
        //TODO add different actions (addProduct, removeProduct, etc..)
        addProduct:(state, { payload }) => {
            state.selectedProducts.push(payload)
            console.log(state.selectedProducts)
        },
    }
})

//TODO if there are any actions export them so they can be dispatched from components

export const {
    addProduct,
    //TODO export more actions
} = product.actions

export default product.reducer