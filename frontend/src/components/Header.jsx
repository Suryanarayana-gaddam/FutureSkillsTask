import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='main-div bg-black d-flex justify-content-between px-5 py-2 rounded-top-4'>
        <div className='inner-div1 d-flex'>
            <div className='icon bg-white p-3 rounded-3 me-1'>
                <div className='icon-square p-2 bg-white fw-bold'>
                    <div className='icon-circle border border-3 border-black rounded-5 fw-bold'>
                    </div>
                </div>
            </div>
            <div className='ms-2 fs-4'>
                <Link to={"/"} className="text-white text-decoration-none">Absrtact</Link>
            </div>
            <div className='ms-3 mt-1 h-100 border '>
            </div>
            <div className='ms-3 fs-4 text-white'>
            <Link to={"/"} className="text-white text-decoration-none">Help&nbsp;Center</Link>
            </div>
        </div>
        <div className='text-primary shadow'>
            <div className='position-relative end-100 border border-dark-subtle rounded-2 mt-2' >
                <button className='border border-2 border-dark bg-dark text-white rounded '>
                    Submit a request
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
