import { useContext } from 'react'
import LanguageChooce from '../context/LanguageContext'

export default function ChangeComponent() {
  const { language, setLanguage, translations } = useContext(LanguageChooce)

  function handleChange() {
    language === 'en' ? setLanguage('ru') : setLanguage('en')
  }

  return (
    <>
      <button onClick={handleChange}>{translations.switchLanguage}</button>
    </>
  )
}
