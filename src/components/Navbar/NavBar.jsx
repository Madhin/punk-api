import React, {useState} from 'react'
import styles from './NavBar.module.scss'


const NavBar = () => {

  return (
    <div className = {styles.NavBar}>
      <img src = "https://gtswiki.gt-beginners.net/decal/png/56/56/88/7062308398250885656_1.png" alt= "Logo"></img>
      <input className = {styles.search} type="text" name="search bar" placeholder="Search beer" />
    </div>
    
  )
}

export default NavBar
