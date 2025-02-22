import axios from 'axios'
import React, { useState } from 'react'
import styles from './CatImage.module.css'

export default function CatImage() {
  const [imgUrl, setImgUrl] = useState('')

  async function getRandomCatImage() {
    try {
      const res = await axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then(response => response.data[0].url)
        .catch(error => console.error(error))
      // console.log(res)
      setImgUrl(res)
      return res
    } catch (error) {
      console.error(error)
    }
  }

  // Загружаем изображение при монтировании компонента
  useState(() => {
    getRandomCatImage()
  }, [])

  return (
    <div className={styles.form}>
      <img className={styles.image} src={imgUrl} alt='Random cat' />
      <button className={styles.button} onClick={getRandomCatImage}>
        Load New Image
      </button>
    </div>
  )
}
