import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/navbar'
import Search from './components/search'
import User from './components/user'
import Sort from './components/sort'
import Works from './components/works'

const App = () => {
  return (
    <>
    <Navbar/>
    <Search/>
    <User/>
    <Sort/>
    <Works/>
    </>
  )
}

export default App