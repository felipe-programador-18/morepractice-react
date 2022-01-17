import React , {useState} from 'react'
import './App.css'
import Button from './button'



//remmeber little bit about react and flag used usestate
const Paragrafo = (props) => {
  return (
    <p>{props.text} </p>
  )
}


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

      </div>
  );
}

export default App;
