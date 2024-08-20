import './App.css'
import MainHeader from './components/MainHeader'
import Footer from './components/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Cards from './components/Cards'
import { useState } from 'react'

function App() {
  const [searchKey,setSearchKey] = useState("");
  return (
    <div className='p-1'>
      <MainHeader setSearchKey={setSearchKey}/>
      <Cards searchKey={searchKey}/>
      <Footer/>
    </div>
  )
}

export default App
