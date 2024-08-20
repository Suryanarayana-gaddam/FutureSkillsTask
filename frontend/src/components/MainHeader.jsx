import React from 'react'
import Header from './Header'

const MainHeader = ({setSearchKey}) => {

  const handleSearchCards = (e) =>{
    e.preventDefault();
    setSearchKey(e.target.value.toLowerCase());
  }

  const handleClickSearch = (e) =>{
    e.preventDefault();
    setSearchKey(e.target.searchKey.value.toLowerCase());
  }

  return (
    <div className='main-header rounded-top-4'>
      <Header/>
      <div className='d-grid justify-content-center align-content-center h-75'>
        <div>
          <h1 style={{fontSize:"50px",marginLeft:"30px"}}>How can we help?</h1>
        </div>
        <div>
          <form onSubmit={handleClickSearch}>
            <input type="text" name='searchKey' id='searchKey' style={{width:"450px",height:"35px"}} className='border border-black px-3' onChange={handleSearchCards} placeholder='Search'/>
            <button style={{position:"relative",right:"30px"}} className='bi bi-arrow-right border-0 bg-white'></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
