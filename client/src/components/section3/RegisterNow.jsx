import React from "react";
import "./register.scss";
const RegisterNow = () => {
  return (
    <div className="register">
      <div className="register__left">
        <div className="register__left__container">
          <h1 className="h1">
            Register now and get a discount <span className="percent">50%</span>{" "}
            discount until 1 January
          </h1>
          <p className="p">
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum
            nulla, vitae tempo.
          </p>
        </div>
      </div>
      <div className="register__right">
        <div className="register__right__container">
          <h1 className="h1"> Search for your course</h1>
    
          <form className="form">
          <input className="formRegister" type="text" id="name" name="name" placeholder="Course Name"/>
          <input className="formRegister" type="text" id="category" name="category" placeholder="Category"/>
          <input className="formRegister" type="text" id="degree" name="degree" placeholder="Degree"/>
          <input className="formSubmit" type="submit" value="Submit"/>
        </form>





        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
