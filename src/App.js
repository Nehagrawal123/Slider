import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const[people, setPeople] = useState(data);
  const[index, setIndex] = useState(0);
  
  const nextButton = ()=>{
    if(index===3)
      setIndex(0);
    else
      setIndex(index+1);
  }
  const prevButton = ()=>{
    if(index===0)
      setIndex(3);
    else
      setIndex(index-1);
  }
  return(
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, pindex)=>{

          const{id,image, name, title, quote} = person;
          let position = 'nextSlide';
          if(index===pindex)
            position = 'activeSlide';
          if(pindex<index)
            position = 'lastSlide';


          return(
            <article key={id} className={position}>
              <img src={image} alt = {name} className='person-img'></img>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote} </p>
              <FaQuoteRight className='icon'></FaQuoteRight>
            </article>
          )
        })}

        <button className='prev' onClick={prevButton}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className='next' onClick={nextButton}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
  );
}

export default App;