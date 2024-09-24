import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getReposits = createAsyncThunk('reposit/getReposits', async (reposit)=>{
  const result = await axios.get(`https://api.github.com/users/${reposit}/repos`)
  const repositInfo = result.data
  return repositInfo
})

const initialState = {
  reposits: null,
  sort: 'created_at',
}

export const repositSlice = createSlice({
  name: 'reposit',
  initialState,
  reducers: {
    sortName: (state, actions)=>{
      state.sort = actions.payload
    },
    sortDate: (state, actions)=>{
      state.sort = actions.payload
    },
    sortStars: (state, actions)=>{
      state.sort = actions.payload
    }
  },
  extraReducers: (build)=>{
    build.addCase(getReposits.fulfilled, (state, action)=>{
      state.reposits = action.payload
    })
  }
})

export const { sortName, sortDate, sortStars } = repositSlice.actions

export default repositSlice.reducer