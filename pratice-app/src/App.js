
import './App.css';



//remmeber little bit about react and flag used usestate
const Paragrafo = (props) => {
  return (
    <p>{props.text} </p>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Lets jump right now!!</h1>       
    
    <Paragrafo text='thought more and practice double down' />
    
    
    
      </div>
  );
}

export default App;
