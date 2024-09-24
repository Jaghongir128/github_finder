import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk('users/getUsers', async (user)=>{
  const result = await axios.get(`https://api.github.com/users/${user}`)
  const userInfo = result.data
  return userInfo
})

const initialState = {
  users: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
  },
  extraReducers: (build)=>{
    build.addCase(getUsers.fulfilled, (state, action)=>{
      state.users = action.payload
    })
  }
})

export const {  } = usersSlice.actions

export default usersSlice.reducer