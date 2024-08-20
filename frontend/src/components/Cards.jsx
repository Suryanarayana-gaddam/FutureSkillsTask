import React, { useEffect, useState } from 'react';
import './Cards.css'; 
import OpenedCard from './OpenedCard';

const Cards = ({searchKey}) => {
  const [cards, setCards] = useState([]);
  const [searchedCards, setSearchedCards] = useState([]);
  const [error, setError] = useState("");
  const [id, setId] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [openedCard,setOpenedCard] = useState(false);
  
  useEffect(() => {
    fetch('http://localhost:5100/get/cards', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log("searchKey :",searchKey)
      if(searchKey){
        const filterData = cards.filter(item => {
          const title = item.title || '';
          const description = item.description || '';
          
          return [title, description].some(value =>
            value.toLowerCase().includes(searchKey)
          );
        });
        console.log("Filtered Data :",filterData)
        setSearchedCards(filterData)
      }else{
        setCards(data);
        setSearchedCards(data);
      }
      setError("")
    })
    .catch(error => {
      console.error('Error:', error);
      setError('Failed to fetch cards.');
    });    
  }, [searchKey]);

  const handleToggle = () => {
    setFormOpen(prevFormOpen => !prevFormOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    fetch('http://localhost:5100/post/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    })
      .then(res => res.json())
      .then(info => {
        alert(info.message);
        setFormOpen(false); 
        return fetch('http://localhost:5100/get/cards').then(res => res.json()).then(data => setCards(data));
      })
      .catch(error => {
        alert('Failed to add card.');
        console.error('Error:', error);
      });
  };

  return (
    <div className='p-2'>
      <div className={`cards-container ${openedCard ? "d-none" : "d-block"}`}>
        <div className="form-toggle">
          {!formOpen && (
            <button onClick={handleToggle} className="btn btn-primary bi bi-plus">
              Add a Card
            </button>
          )}
          {formOpen && (
            <button onClick={handleToggle} className="btn btn-close">
            </button>
          )}
        </div>
        {formOpen && (
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input type="text" name="title" id="title" className="form-input" required />
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea name="description" id="description" className="form-textarea" required />
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </div>
        )}
        <div className="cards-grid">
          {searchedCards.length>0 ? searchedCards.map(card => (
              <div key={card.id} className="card" style={{cursor:"pointer"}} onClick={() => {
                setId(card.id)
                setOpenedCard(true)
                }}>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-description">{card.description}</p>
              </div>
          )) : "No cards Available!"}
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>
      <div className={`${openedCard ? "d-block" : "d-none"}`}>
        <OpenedCard id={id} setOpenedCard={setOpenedCard}/>
      </div>
    </div>
  );
};

export default Cards;

