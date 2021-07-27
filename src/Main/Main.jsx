import React from 'react'
import Card from '../components/Card'


const Main = (props) => {
const {beers} = props;

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
