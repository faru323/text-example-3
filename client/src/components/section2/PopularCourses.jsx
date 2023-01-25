import React, { useEffect, useState } from "react";
import axios from "axios";
import "./popular.scss";
const PopularCourses = () => {
  const [cards, setCards] = useState([]);

  cards.sort((a, b) => (a.color > b.color ? 1 : -1));


  useEffect(() => {
    axios
      .get("http://localhost:8080/api/student")
      .then((res) => setCards(res.data));
  }, []);


  function myFunction() {
    cards.sort((a, b) => (a.price > b.price ? 1 : -1));
    console.log(cards)
    setCards([...cards]);
   
  }
  return (
    <div className="popular">
      <div className="container">
        <div className="titlePopular">
          <div className="line"></div>
          <h1 className="serviceTitle">Popular Courses</h1>
        </div>
        <div className="descPopular">
        <button onClick={myFunction}>Sort by price</button>
      {cards.map((card) => {
        return (
        
          <div className="cards">
          <p className="popul">{card.name}</p>
          <p>
           {card.description}
          </p>
          <p>
           {card.price}
          </p>
      
        </div>
  
        );
      })}

        </div>
      </div>
    </div>
  );
};

export default PopularCourses ;
