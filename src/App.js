import React, { useEffect, useState } from 'react';
import './App.css';
import chuck from './chk.jpg';
import axios from 'axios';

function App() {
   
   const [state, setState] = useState({
     joke: ''
   })
 useEffect(  () => {
   fetchData();
    }, []);

 const fetchData = async ()  => {
  const result = await axios.get('https://api.chucknorris.io/jokes/random');
  console.log(result.data.value);
  setState({
    ...state,
    joke: result.data.value
  })
 }

 return (
 <div className = "container">
     <h1 className = "title">Chuck Norris</h1>
     <div className = "feature_one">
      <h3 className = "title">Welcome now take a spin and Let's Find a Legendary Jokes</h3>
    </div>
    <div className = "feature_two">
      <div className = "feature_three">
        <img src ={chuck} alt = "legends"/>
      </div>
      <div>
      <button className = "btn" type = "submit" onClick = { fetchData  } >Find the Joke.</button>
      </div>
    </div>
    <div className = "joke">
    <h2 className = "title_2">And the Joke</h2>
  <h4>Hear This {state.joke}</h4>
    </div>
</div>
  );
}

export default App;
