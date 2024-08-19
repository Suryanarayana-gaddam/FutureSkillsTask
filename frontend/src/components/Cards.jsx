import React, { useEffect, useState } from 'react'

const Cards = () => {
  const [cards,setCards] = useState([]);
  const [error,setError] = useState("");
  const [formOpen,setFormOpen] = useState(false);

  useEffect(() =>{
    fetch(`http://localhost:5100/get/cards`,{
      method:"GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(data => {
      setCards(data);
    })
    .catch(error => {
      console.log("Error :",error);
      setError(error)
    })
  },[])

  
  const handleToggle = () =>{
    {formOpen ? setFormOpen(false) : setFormOpen(true)}
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    fetch(`http://localhost:5100/post/cards`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({title,description})
    }).then(res => {
      return res.json()
    })
    .then(info => {
      alert(info.message)
    }).catch(error =>{
      alert(error)
    })
  }
  return (
    <div className='pt-2'>
      <div className='d-grid justify-content-center w-100 h-100'>
        {
          !formOpen && 
          <button style={{position:"absolute",right:"60px"}} onClick={handleToggle} className='bi bi-plus'>
          Add a Card
          </button>
        }
        {
          formOpen && 
          <button style={{position:"absolute",right:"390px"}} onClick={handleToggle} className='btn btn-close'> 
          </button>
        }
        {formOpen && 
          <div style={{width:"450px",height:"fit-content"}}>
            <form onSubmit={handleSubmit} className=' p-2 border border-2 border-black m-3 d-grid justify-content-center'>
              <label htmlFor="title" className='fw-bold fs-5'>Tiltle :</label>
              <input type="text" name='title' id='title' className='mb-3 p-1' style={{width:"300px"}}/>
              <label htmlFor="description" className='fw-bold fs-5'>Description :  </label>
              <textarea type="text" name='description' id='description' className='p-2' style={{width:"300px",height:"80px"}}/>
              <button className='mt-3 fw-bolder'>Submit</button>
            </form>
          </div>
        } 
      </div>
      <div className='p-3 d-flex align-items-center justify-content-center'>
        {
          cards.map(card => 
            <div key={card.id} style={{width:"400px", height:"100px",overflow:"auto"}} className='m-2 rounded  border border-2 border-black'>
              <h5>{card.title}</h5>
              <p>{card.description}</p>
            </div>
          )
        }
      </div>
      {error && <span className='text-danger'>error</span>}
    </div>
  )
}

export default Cards
