import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customerName: "",
    customerPhone: "",
    guests: 0,
    tableNo: ""
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setCustomer: (state, action) => {
            const { customerName, customerPhone, guests } = action.payload;
            state.customerName = customerName;
            state.customerPhone = customerPhone;
            state.guests = guests;
        },

        removeCustomer: (state) => {
            state.customerName = "";
            state.customerPhone = "";
            state.guests = 0;
            state.tableNo = "";
        },

        updateTable: (state, action) => {
            state.tableNo = action.payload;
        }
    }
});

export const { setCustomer, removeCustomer, updateTable } = customerSlice.actions;
export default customerSlice.reducer;
