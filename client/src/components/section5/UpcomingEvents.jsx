import React from "react";
import "./upcoming.scss";
const UpcomingEvents = () => {
  return (
    <div className="upcoming">
      <div className="container">
        <div className="title">
          <div className="line"></div>
          <h1 className="serviceTitle">Upcoming Events</h1>
        </div>
        <div className="event">
          <div className="event__left">
            <div className="eventss">
              <h1 >07</h1>
              <p>January</p>
            </div>
            <div className="eventss">
              <h1>07</h1>
              <p>January</p>
            </div>
            <div className="eventss">
              <h1>07</h1>
              <p>January</p>
            </div>
          </div>
          <div className="event__middle">
            <div className="text">
              <h2>Student Festival</h2>
              <p> Grand Central Park</p>
              <p>
                
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor.
              </p>
            </div>
            <div className="text">
              <h2>Student Festival</h2>
              <p> Grand Central Park</p>
              <p>
              
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor.
              </p>
            </div>
            <div className="text">
              <h2>Student Festival</h2>
              <p> Grand Central Park</p>
              <p>
               
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor.
              </p>
            </div>
          </div>
          <div className="event__right">
          

          <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp" alt="imagae"/>
          <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp" alt="imagae"/>
          
          <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp" alt="imagae"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
