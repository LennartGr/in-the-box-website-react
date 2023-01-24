import './App.css'
import Hero from './components/Hero'
import MainContent from './components/MainContent'

import { LanguageProvider } from './containers/Language';
import LanguageSelector from './components/LanguageSelector';

export default function App() {
  return (
    <LanguageProvider>  
      <div id="app">
        <Hero />
        <MainContent />
      </div>
    </LanguageProvider>
  )
}

