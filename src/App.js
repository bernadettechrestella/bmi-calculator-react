import { useState } from "react";
import './index.css'

function App() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState('');

    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current);
      setIsShown2(current => !current);
    };

    // let imgSrc;

    // if (bmi < 1) {
    //   imgSrc = null
    // } else {
    //   if(bmi < 18.5) {
    //     imgSrc = require('../src/assets/underweight.png')
    //   } else if (bmi >= 18.5 && bmi < 25) {
    //     imgSrc = require('../src/assets/healthy.png')
    //   } else if (bmi > 25 && bmi < 30){
    //     imgSrc = require('../src/assets/overweight.png')
    //   }
    // }

    let calcBmi = (event) => {
      event.preventDefault()

      if (weight === '' || height === '' ) {
        setIsShown(false)
        setIsShown2(false)
        alert('Please enter a valid weight and height')
      }
      else {
        let bmi = Number(weight / ((height/100) ** 2))
        setBmi(Math.ceil(bmi*10)/10)

        if (bmi < 18.5) {
          setMessage('You are Underweight')
          setIsShown2(false)
        } else if (bmi >= 18.5 && bmi < 25) {
          setMessage('You are Normal weight')
          setIsShown2(false)
        } else if (bmi >= 25 && bmi < 30){
          setMessage('You are Overweight')
          setIsShown2(false)
        } else if (bmi > 30) {
          setMessage('You are Obesity')
          setIsShown2(false)
        } else if (isNaN(bmi)) {
          setIsShown(false)
        }
      }
    }

    let reload = () => {
      window.location.reload()
    }  
  
    return (
      <div className="app">
        <div className='container'>
          <h2 className='title'>BMI Calculator</h2>
          <p className='caption'>BMI applies to most adults 18-65 years.</p>
          <form onSubmit={calcBmi}>
            <div>
              <label>Height (cm)</label>
              <input value={height} placeholder='Enter your Height' onChange={(event) => setHeight(event.target.value)} />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input value={weight} placeholder='Enter your Weight' onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
              <button className='btn' type='submit' onClick={handleClick}>Submit</button>
              <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
            </div>
          </form>

          {isShown && (
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
              <p className="message">{message}</p>
          </div>
          )}

          {isShown2 && (
          <div className='center'>
            <h3 className="err">Can't calculate BMI</h3>
          </div>
          )}
          
          {/* {isShown && (
          <div className='img-container'>
            <img src={imgSrc} alt=''></img>
          </div>
          )} */}

          {isShown && (
            <div className="center">
              <p className="under">Underweight: less than 18.5</p>
              <p className="normal">Normal weight: 18.5 - 24.9</p>
              <p className="over">Overweight: 25 - 30</p>
              <p className="obes">Obesity: more than 30</p>
          </div>
          )}
          
          <div>
            <p className="copyright">Copyright 2023 • All Rights Reserved by Bernadette Chrestella</p>
          </div>
        </div>
      </div>
    );
  }

export default App;
