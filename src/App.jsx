import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

import { LanguageProvider } from './containers/Language';
import LanguageSelector from './components/LanguageSelector';

export default function App() {
  return (
    <LanguageProvider>  
      <div id="app">
        <LanguageSelector />
        <Hero />
        <Navbar />
      </div>
    </LanguageProvider>
  )
}

