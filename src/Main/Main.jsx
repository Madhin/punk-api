import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../components/Card/Card';



const Main = () => {
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


  return (
    <div>
    
      {beers &&
          beers.map((beer) => {
            return <Card beer = {beer}/>
          })}
          
      </div>
  );
}
    
export default Main
