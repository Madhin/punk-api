import React from 'react'
import styles from './Card.module.scss'

const Card = (props) => {

  const {name, image_url, tagline, abv, ibu, description} = props.beer; 
  return (
    <div className={styles.container}>
    <div className={styles.beer}>
    <h2 className= {styles.name}>{name}</h2>
    <img src = {image_url} alt = "beer image"/>
    <h4 className = {styles.tagline}>{tagline}</h4>
    <p className ={styles.description}>{description}</p>
    <p className = {styles.abv}>ABV:{abv}</p>
    <p className = {styles.ibu}>IBU:{ibu}</p>
  </div>
  </div>
  )
}

export default Card
