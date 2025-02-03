import Spotify from '../../assets/spotify.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <nav className={styles.logo}>
      <img src={Spotify} alt='Spotify' />
    </nav>
  )
}
