import React, { Component, useEffect, useState } from 'react';
import "./app.css"
 
function  App() {
 
  const [quotes,setQuotes] = useState("");
  const getQutes = ()  =>{

         fetch("https://type.fit/api/quotes")
         .then((res) => res.json())
        /*  .then((data) => console.log(data)); */
        .then((data) =>{let randomNum = Math.floor(Math.random()*data.length)
          setQuotes(data[randomNum])
        
        })
      }

      useEffect(()=> { getQutes();} ,[])
     

    return (
      <div className="App">
 
 <div className='quote'>
  <p>{quotes.text}</p>
  <p>{quotes.author}</p>
 

 <div className='btnContainer'>
  <button onClick={getQutes} className='btn' > Get Quote</button>
 </div>

 </div>

      </div>
    );
  }


export default App;
