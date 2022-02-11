import React, { useState, useEffect, useContext } from 'react'
import DisplaySection from '../DisplaySection';
import projectContext from '../ProjectContext';

const Test = () => {
    const [section, setSection] = useState('posts');
    const {title, count, setCount} = useContext(projectContext)
    

    const Increment = () => {
      setCount(count+1)
    }

    useEffect(()=>{
      console.log(count)
    }, [count]);

    useEffect(()=>{
      console.log(section);
    },[section])

    // 1. section --> posts  2. status



    const Decrement = () => {
      setCount(count-1)
    }
  return (
    <div style={{height: '100vh'}}>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <div className='row'>
        <DisplaySection section={section} />
      <button onClick={()=>setSection('posts')}>posts</button>
      <button onClick={()=>setSection('status')}>status</button>
      <button onClick={()=>setSection('settings')}>settings</button>
      
      </div>
    </div>
  )
}

export default Test