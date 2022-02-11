import React, { useContext } from 'react'
import projectContext from './ProjectContext'

const User = () => {
  const {title, count, setCount} = useContext(projectContext)

  return (
    <div>
    <div>{count}</div>
    <button onClick={()=>setCount(10)}>update as 10</button></div>
  )
}

export default User