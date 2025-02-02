import { useState } from 'react'
import LanguageContext from '../context/LanguageContext'
import ChangeComponent from './ChangeComponent'
import TextComponent from './TextComponent'

function App() {
  const [language, setLanguage] = useState('en')

  const translations = {
    ru: {
      title: 'Список на Русиш ',
      switchLanguage: 'Переключить на енглиш',
    },
    en: {
      title: 'List on Englisg',
      switchLanguage: 'Switch to Rusisch',
    },
  }
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translations: translations[language] }}
    >
      <TextComponent />
      <ChangeComponent />
    </LanguageContext.Provider>
  )
}

export default App
