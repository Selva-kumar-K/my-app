import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phonecategory: [
    {
      id: 1,
      productName: "Iphone",
      productPrice: 247,
      description: "OS",
      qty: 0,
    },
    {
      id: 2,
      productName: "Mac",
      productPrice: 247,
      description: "OS",
      qty: 0,
    },

    {
      id: 3,
      productName: "Ipad",
      productPrice: 247,
      description: "OS",
      qty: 0,
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {



    addqty: (state, action) => {
      // console.log(action.payload);

      state.phonecategory.map((item, index) => {
        if (item.id === action.payload) {
          item.qty += 1;
        }
      });
    },


    addproduct:(state,action)=>{
        state.phonecategory.push(action.payload)
    }



  },
});

export const { addqty ,addproduct} = productSlice.actions;
export default productSlice.reducer;
