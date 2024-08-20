import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const OpenedCard = ({id,setOpenedCard}) => {
    const [cardDetails,setCardDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5100/get/card/${id}`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(data =>{
            setCardDetails(data);
            console.log("Card Data :",data)
        })
    },[id])
  return (
    <div className='position-relative p-3'>
      {cardDetails && 
        <div>
            <h1>{cardDetails.title}</h1>
            <h5>{cardDetails.description}</h5>
        </div>
      }
    <div>
        <button onClick={() => setOpenedCard(false)} className='btn btn-close text-black position-absolute top-0 end-0' ></button>
    </div>
    </div>
  )
}

export default OpenedCard;
