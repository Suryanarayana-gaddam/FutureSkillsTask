import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-black rounded-bottom-4 text-white '>
      <div className='h-100'>
        <h5>Abstract</h5>
        <p>Branches</p>
      </div>
      <div className='h-100'>
        <h5>Resources</h5>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Release Notes</p>
        <p>Status</p>
      </div>
      <div className='h-100'>
        <h5>Community</h5>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>Dribbble</p>
        <p>Pod Cast</p>
      </div>
      <div className='h-100'>
        <div>
          <h5>Company</h5>
          <p>About Us</p>
          <p>Careers</p>
          <p>Legal</p>
        </div>
        <div>
          <h6>Contact Us</h6>
          <p>info@abstract.com</p>
        </div>
      </div>
      <div className='h-100'>
        <div className='h-50'></div>
        <div className='inner-div1'>
          <div className='position-relative bottom-75'>
            <div className='icon bg-white p-3 rounded-3 me-1'>
                <div style={{width:"19px"}} className='icon-square p-2 bg-white fw-bold'>
                    <div style={{width:"14px"}} className='icon-circle border border-3 border-black rounded-5 fw-bold'>
                    </div>
                </div>
            </div>
          </div>
          <small>
            Copyright 2022
          </small>
          <div style={{fontSize:"small"}}>Abstract Studio Design, Inc.</div>
          <div style={{fontSize:"small"}}>All rights reserved</div>
        </div>

      </div>
    </div>
  )
}

export default Footer
