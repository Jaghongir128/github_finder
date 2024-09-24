import React from 'react'
import './user.css'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../store/features/users'

const User = () => {
  const user = useSelector((state)=>state.users.users)
  return user && (
    <div className="user">
        <div className="user__content">
        <div className="user__logo">
        <img src={user.avatar_url} alt="" className="user__img" />
        <a href={user.html_url} className="user__btn">ПОСЕТИТЬ</a>
        </div>
        <div className="user__info">
            <p className="user__desc">{user.name}</p>
            <p className="user__desc">Репозиториев: <span>{user.public_repos}</span></p>
            <p className="user__desc">Создан: <span>{user.created_at}</span></p>
            <p className="user__desc">Подписщиков: <span>{user.followers}</span></p>
            <p className="user__desc">Подписок: <span>{user.following}</span></p>
            </div>
        </div>
    </div>
  )
}

export default User