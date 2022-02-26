import React , {useState, useReducer, useEffect} from 'react'
import './App.css'
import Button from './button'
import H1 from './h1'
import H3 from './h3'
import Paragrafo from './paragr'
import axios from 'axios'

//remmerber to caught url i have always remmeber caught api about axios

const Url ="https://build-api-8a54e-default-rtdb.firebaseio.com"

//remember reducer function always receive state and action to caught API REST!!
const reducer = (state, action) =>{

 if(action.type === 'REQUEST'){
   return{
     ...state,
     loading: true
   }
 }
if(action.type === 'SUCCESS'){
  return{
    ...state,
    loading:false,
    data: action.data
  }
}


  return state
}

const UseGet = url =>{

  const [data, dispacth] = useReducer(reducer,
    ({loading:true, data:{}})
    ) 

// practice about map interativ list    


   
// i always make and use usereducer because to seeing and show in the dashboard

 useEffect(() => {
     dispacth({type:'REQUEST'}) 
    axios
    .get(Url)
    .then(res => {
      dispacth({type:'SUCCESS', data: res.data})
  })
 }, [])


}
 
const Arrey = [1,2,3,4,5,6,7,8,9,10]
const Caught = Arrey.map((Arrey) =>{
   return <ul> {Arrey**2} </ul>
})



function App() {
 const [moreone, setmoreone] = useState(0)
 
 // here i always set usereducer to dispacth and caught date
 
 const [data, dispacth] = useReducer(reducer,
    ({loading:true, data:{}})
    ) 

   
// i always make and use usereducer because to seeing and show in the dashboard

 useEffect(() => {
     dispacth({type:'REQUEST'}) 
    axios
    .get(Url)
    .then(res => {
      dispacth({type:'SUCCESS', data: res.data})
  })
 }, []) // dependents empty


 const Increased = () => {
   setmoreone(moreone+1)
 } 

 const decrement = () => {
   setmoreone(moreone-1)
 }


  return (
    <div className="App">
      <h1>Lets jump right now!!</h1>       
      
      <ul> {Caught} </ul> 
    <Paragrafo text='thought more and practice double down' />
     {moreone}
     <br/>
     <Button text ='+' onClick= {Increased}  />
     <Button text ='-' onClick= {decrement}  />

      <input type='email'></input>
       

      <H1  write='thuoght about your future'/>
      <H3   kinda = 'never think that you studies much, always have some that studies more with you' />    

    


      <h1>Test api here now</h1>
       
      {JSON.stringify(data)}
      {data.loading && <p>Loading page ....</p>}
          
      </div>
  );
}

export default App;
