import React from 'react'
import { useSelector } from 'react-redux'

const Worksitem = (props) => {
  const reposit = useSelector((state)=>state.reposit.reposits)
  const {elem} = props.value
    return (
      <div className="works__item">
              <div className="works__content">
              <h3 className="works__title">{elem.name}</h3>
              <p className="works__desc">Кол-во звёзд: {elem.stargazers_count}</p>
              <p className="works__desc">Дата добавления: {elem.created_at}</p>
              </div>
              <div className="works__controls">
              <a href={elem.html_url} className="works__btn">ПОСЕТИТЬ</a>
              </div>
          </div> 
  )
}

export default Worksitem