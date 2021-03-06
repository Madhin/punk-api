import React, {useState} from 'react'
import styles from './NavBar.module.scss'
import Logo from '../../../src/Logo.png'



const NavBar = (props) => {
  const {setSearch, 
  fetchBeers, 
  abvVal,
  setAbvVal,
  ibuVal,
  setIbuVal,
  isClassic,
  setIsClassic} = props;
    

  return (
    <div className = {styles.NavBar}>
      <img className = {styles.logo} src = {Logo} alt= "Logo"></img>
      <input className = {styles.search} type="text" name="search bar" placeholder="Search by name" 
      onChange = {e => 
      {setSearch(e.target.value);
       fetchBeers();}
      }/>
      <div className={styles.progress}>
      <label>Filter by International Bitterness Index</label>
      <label className={styles.sliderValue}>> {ibuVal}</label>
      <input  type="range" id="ibuVal" min="0" max="250" value={ibuVal} step="1" onInput={event => {
          setIbuVal(event.target.value);
          fetchBeers();
          }
        }/>
        <label>Filter by Alcohol By Volume</label>
      <label className={styles.sliderValue}>> {abvVal}%</label>
      <input  type="range" id="abvVal" min="0" max="35" value={abvVal} step="0.1" onInput={event => {
          setAbvVal(event.target.value);
          fetchBeers();
          }
        }/>

      <label>Classic :</label>
      <label>{`< 2011`}</label>
      <input
        type="checkbox"
        id="isClassic"
        onChange={() => {
          setIsClassic(!isClassic)
          fetchBeers();
          }
        }>
      </input>
      </div>
    </div>
    
  )
}

export default NavBar
