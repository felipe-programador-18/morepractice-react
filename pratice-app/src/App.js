import React , {useState} from 'react'
import './App.css'
import Button from './button'
import H1 from './h1'
import H3 from './h3'
import Paragrafo from './paragr'
import axios from 'axios'




function App() {
 const [moreone, setmoreone] = useState(0)
  
 const Increased = () => {
   setmoreone(moreone+1)
 } 

 const decrement = () => {
   setmoreone(moreone-1)
 }


  return (
    <div className="App">
      <h1>Lets jump right now!!</h1>       
    
    <Paragrafo text='thought more and practice double down' />
     {moreone}
     <br/>
     <Button text ='+' onClick= {Increased}  />
     <Button text ='-' onClick= {decrement}  />

      <input type='email'></input>
       

      <H1  write='thuoght about your future'/>
      <H3   kinda = 'never think that you studies much, always have some that studies more with you' />    




      

      <h1>Test api here now</h1>

      </div>
  );
}

export default App;
