import React, {useState} from 'react'
import styles from './NavBar.module.scss'



const NavBar = (props) => {
  const {setSearch} = props;
  const [state, setState] = useState(0)

  const handleChange = (e) =>{
    setState(e.target.value)
    console.log(state)
  }

  const value = {state}

  return (
    <div className = {styles.NavBar}>
      <img src = "https://gtswiki.gt-beginners.net/decal/png/56/56/88/7062308398250885656_1.png" alt= "Logo"></img>
      <input className = {styles.search} type="text" name="search bar" placeholder="Search by name" onChange = {e => setSearch(e.target.value)}/>
      <div className={styles.progress}>
      <label>Filter by IBU</label>
      <input  type="range" min="0" max="70" value={state} onChange = {handleChange} step="10"/>
      </div>
    </div>
    
  )
}

export default NavBar
