import React from 'react'
import './works.css'
import { useSelector, useDispatch } from 'react-redux'
import { getReposits } from '../../store/features/reposit'
import Worksitem from './Worksitem'

const Works = () => {
  const reposit = useSelector((state)=>state.reposit.reposits)
  const sort = useSelector((state)=>state.reposit.sort)
  console.log(reposit);
  let sortReposit = null
  if (reposit) {
    sortReposit = [...reposit]
    sortReposit.sort((next, now)=>{
      if (next[sort] < now[sort]) {
        return -1
      }
    })
  }
  return sortReposit && (
    <div className="works">
        {
          sortReposit.map((elem)=>(
            <Worksitem key={elem.id} value={
              {
              reposit,
              elem
              }
            } />
          ))
        }
    </div>
  )
}

export default Works