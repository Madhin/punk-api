import React, { Component } from 'react';
import './App.css';
import Main from './Main/Main';
import NavBar from './components/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';


const App = () => {
  const [beers, setBeers] = useState();
  const [search, setSearch] = useState("");
  
 
  const apiURL = "https://api.punkapi.com/v2/beers"

  const fetchData = async () => {
    const response = await axios.get(apiURL)

    setBeers(response.data)
    console.log(beers)
}

useEffect(() => {
fetchData()
}, [])

const filteredBeers = search.length === 0 ? beers : 
    beers.filter(beer => beer.name.
                toLowerCase().includes(search.toLowerCase()))
                
console.log(filteredBeers)


  return (
    <div>
      <NavBar setSearch = {setSearch}/>
      <Main beers = {filteredBeers} />
    </div>
  )
}

export default App
