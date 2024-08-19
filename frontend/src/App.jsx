import './App.css'
import { Outlet } from 'react-router-dom'
import MainHeader from './components/MainHeader'
import Footer from './components/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Cards from './components/Cards'

function App() {

  return (
    <div className='p-1'>
      <MainHeader/>
      <Cards/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
