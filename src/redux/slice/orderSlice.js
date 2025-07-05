import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderCount: 0,
    items: []
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder(state, action) {
            state.orderCount += 1
            const selDish = action.payload
            state.items.push(selDish)     
        },
        removeOrder(state, action) {
            state.orderCount -= 1
            const selDish = action.payload
            state.items = state.items.filter(item => item.dish.id != selDish.id);            
        }
    },
}
)

export const { addOrder, removeOrder } = orderSlice.actions
export default orderSlice.reducer
