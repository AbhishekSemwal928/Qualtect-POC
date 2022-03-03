import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const user = useSelector((state)=>state.name_reducer)

  console.log('name',user);

  return (
    <>
    <div>Home</div>
    <h2>Welcome {user}</h2>
    </>
  )
}

export default Home