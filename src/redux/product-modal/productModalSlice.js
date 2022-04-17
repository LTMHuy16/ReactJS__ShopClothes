import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
  name: 'productModal',
  initialState: {
    value: null
  },
  reducers: {
    setProduct: (state, action) => {
      state.value = action.payload
    },
    removeProduct: (state) => {
      state.value = null
    },
  }
})

export const { setProduct, removeProduct } = productSlice.actions

export default productSlice.reducer