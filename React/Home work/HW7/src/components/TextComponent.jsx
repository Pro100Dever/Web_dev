import { useContext } from 'react'
import LanguageChooce from '../context/LanguageContext'

export default function TextComponent() {
  const { language, setLanguage, translations } = useContext(LanguageChooce)
  return (
    <>
      <h3>{translations.title}</h3>
    </>
  )
}
