import React from 'react'
import Header from './Header'

const MainHeader = () => {
  return (
    <div className='main-header rounded-top-4'>
      <Header/>
      <div className='d-grid justify-content-center align-content-center h-75'>
        <div>
          <h1 style={{fontSize:"50px",marginLeft:"30px"}}>How can we help?</h1>
        </div>
        <div>
          <input type="text" style={{width:"450px",height:"35px"}} className='border border-black px-3' placeholder='Search'/>
          <button style={{position:"relative",right:"30px"}} className='bi bi-arrow-right border-0 bg-white'></button>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
