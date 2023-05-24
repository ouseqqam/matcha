import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sign: true,
  user: user ? user : null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: ''
}

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {  
        reset: state => {
            state.isLoading = false
            state.isSuccess = false
            state.message = false
            state.isError = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
 
export default counterSlice.reducer