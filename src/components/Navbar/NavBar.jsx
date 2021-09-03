import React, {useState} from 'react'
import styles from './NavBar.module.scss'



const NavBar = (props) => {
  const {setSearch, 
  fetchBeers, 
  abvVal,
  setAbvVal,
  ibuVal,
  setIbuVal,
  ebcVal,
  setEbcVal,
  isClassic,
  setIsClassic} = props;
    

  return (
    <div className = {styles.NavBar}>
      <img className = {styles.logo} src = "https://gtswiki.gt-beginners.net/decal/png/56/56/88/7062308398250885656_1.png" alt= "Logo"></img>
      <input className = {styles.search} type="text" name="search bar" placeholder="Search by name" 
      onChange = {e => 
      {setSearch(e.target.value);
       fetchBeers();}
      }/>
      <div className={styles.progress}>
      <label>Filter by IBU</label>
      <label className={styles.sliderValue}>{ibuVal}</label>
      <input  type="range" id="ibuVal" min="0" max="250" value={ibuVal} step="1" onInput={event => {
          setIbuVal(event.target.value);
          fetchBeers();
          }
        }/>
        <label>Filter by ABV</label>
      <label className={styles.sliderValue}>{abvVal}%</label>
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
