import { configureStore } from '@reduxjs/toolkit'
import users from './features/users'
import reposit from './features/reposit'

export const store = configureStore({
  reducer: {
    users,
    reposit,
  },
})