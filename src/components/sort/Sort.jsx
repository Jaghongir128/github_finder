import React from 'react'
import './sort.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortName, sortDate, sortStars } from '../../store/features/reposit'

const Sort = () => {
  const name = useSelector((state)=>{return state.reposit.sort})
  const dispatch = useDispatch()
  return (
    <div className="sort">
        <h3 className="sort__title">Сортировка</h3>
        <div className="sort__controls">
            <button className="sort__btn" onClick={()=>{ dispatch(sortName('name')) }}>ИМЯ</button>
            <button className="sort__btn active" onClick={()=>{dispatch(sortStars('stargazers_count'))}}>ЗВЕЗДЫ</button>
            <button className="sort__btn" onClick={()=>{dispatch(sortDate('created_at'))}}>ДАТА</button>
        </div>
    </div>
  )
}

export default Sort