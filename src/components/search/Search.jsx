import React, { useState } from 'react'
import './search.css'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../store/features/users'
import { getReposits } from '../../store/features/reposit'

const Search = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const setUsers = (z)=>{
    if (z.key == 'Enter' && query) {
      dispatch(getUsers(query))
      dispatch(getReposits(query))
    }
  }
  return (
    <div className="search">
        <div className="search__form">
            <input 
            type="text" 
            className="search__input" 
            placeholder='Введите имя пользователя'
            onChange={(e)=>{setQuery(e.target.value)}}
            onKeyDown={setUsers}
            />
            <button
            className="search__btn"
            onClick={()=>{
              if (query) {
                dispatch(getUsers(query), dispatch(getReposits(query)))
              }
              }}
            >
            НАЙТИ
            </button>
        </div>
    </div>
  )
}

export default Search