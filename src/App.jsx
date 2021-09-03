import React, { Component } from 'react';
import './App.css';
import Main from './Main/Main';
import NavBar from './components/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';


const App = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [abvVal, setAbvVal] = useState(0);
  const [ibuVal, setIbuVal] = useState(0);
  const [ebcVal, setEbcVal] = useState(0);
  const [isClassic, setIsClassic] = useState(false);

const fetchBeers = () => {
  const nameStr = search ? `&beer_name=${search}` : "";
  const abvStr = `&abv_gt=${abvVal}`;
  const ibuStr = `&ibu_gt=${ibuVal}`;
  const ebcStr = `&ebc_gt=${ebcVal}`
  const isClassicStr = isClassic ? `&brewed_before=01-2011` : "";

  const url = `https://api.punkapi.com/v2/beers?per_page=80${nameStr}${abvStr}${ibuStr}${isClassicStr}${ebcStr}`
    fetch(url)
    .then((response) => response.json())
    .then(data => setBeers(data));
  }

  useEffect(() => {
    fetchBeers();
  }, []);


  return (
    <div>
      <NavBar
      fetchBeers={fetchBeers} 
      setSearch = {setSearch}
      abvVal = {abvVal}
      setAbvVal = {setAbvVal}
      ibuVal = {ibuVal}
      setIbuVal = {setIbuVal}
      ebcVal = {ebcVal}
      setEbcVal = {setEbcVal}
      isClassic={isClassic}
      setIsClassic={setIsClassic}/>
      <Main beers = {beers} />
    </div>
  )
}


export default App
