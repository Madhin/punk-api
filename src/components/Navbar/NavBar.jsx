import React, {useState} from 'react'
import styles from './NavBar.module.scss'



const NavBar = (props) => {
  const {setSearch} = props;
  const [state, setState] = useState("")

  const handleChange = (e) =>{
    setState(e.target.value)
  }

  return (
    <div className = {styles.NavBar}>
      <img src = "https://gtswiki.gt-beginners.net/decal/png/56/56/88/7062308398250885656_1.png" alt= "Logo"></img>
      <input className = {styles.search} type="text" name="search bar" placeholder="Search beer" onChange = {e => setSearch(e.target.value)}/>

      <input id="typeinp" type="range" min="0" max="5" value={state} onChange = {handleChange} step="1"/>
    </div>
    
  )
}

export default NavBar
