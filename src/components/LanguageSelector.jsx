import React, { useContext, useState } from 'react';
import './css/LanguageSelector.css'

import flags from "../images/flags/flags"

import { languageOptions } from '../languages';
import { LanguageContext } from '../containers/Language';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  //state that manages whether the language bar is displayed
  const [optionsShown, setOptionsShown] = useState(false)

  //returns full string of current language
  function getCurrentLanguage() {
    return languageOptions[userLanguage]
  }

  //create one option for each language
  const options = Object.entries(languageOptions).map(([id, name]) => (
    <div
      key={id}
      className="option"
      onClick={function () {
        userLanguageChange(id)
        setOptionsShown(false)
      }}>
      <img className="flag" src={flags[id]} />
      {name}
    </div>
  ))

  //integrate language selector into the navbar by adding following classNames to the outer div
  return (
    <div id="navbar--LanguageSelector" className="navbar--item navbar--item--text" 
    onMouseEnter={() => setOptionsShown(true)}
    onMouseLeave={() => setOptionsShown(false)}>
      <div id="select-box" className="navbar--item">
        {/*conditionally add active to className of options-container
      Leave order of the two divs like this to enable toggling arrow direction*/}
        <div className={`options-container${optionsShown ? " active" : ""}`}>
          {options}
        </div>
        <div className="selected">
          <img className="flag" src={flags[userLanguage]} />
          {getCurrentLanguage()}
        </div>
      </div>
    </div>
  )
};
