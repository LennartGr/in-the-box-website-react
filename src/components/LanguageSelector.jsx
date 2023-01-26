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

  //retrieves the dropdown-menu / shows it
  function toggleShowOptions() {
    setOptionsShown(val => !val)
  }

  //create one option for each language
  const options = Object.entries(languageOptions).map(([id, name]) => (
    <div
      key={id}
      className="option"
      onClick={function () {
        userLanguageChange(id)
        toggleShowOptions()
      }}>
      <img className="flag" src={flags[id]} />
      {name}   
    </div>
  ))

  return (
    <div className="select-box">
      {/*conditionally add active to className of options-container*/}
      <div className={`options-container${optionsShown ? " active" : ""}`}>
        {options}
      </div>
      <div className="selected" onClick={toggleShowOptions}>
        <img className="flag" src={flags[userLanguage]} />
        {getCurrentLanguage()}
      </div>
    </div>
  )
};
