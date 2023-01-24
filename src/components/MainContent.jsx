import { useState, useEffect } from 'react'
import { Text, LanguageContext } from '../containers/Language';

import Home from "./Home"
import News from "./News"
import Contact from "./Contact"
import About from "./About"
import Navbar from "./Navbar"

export default function MainContent() {

    const initialTabs = [
        {
            id: 0,
            component: <Home />,
            title: <Text tid="home" />,
            active: true
        },
        {
            id: 1,
            component: <News />,
            title: <Text tid="news" />,
            active: false
        },
        {
            id: 2,
            component: <Contact />,
            title: <Text tid="contact" />,
            active: false
        },
        {
            id: 3,
            component: <About />,
            title: <Text tid="about" />,
            active: false
        }
    ]
    const [tabs, setTabs] = useState(initialTabs)

    function getActiveTab() {
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].active) {
                return tabs[i]
            } 
        }
        //in case no active tab was found, for debugging
        return {component: <p>No active tab</p>}
    } 

    //set the active tab to the one with this id
    function setActiveTab(id) {   
        setTabs( prevTabs => prevTabs.map(tab => ({...tab, active: tab.id === id})))
    }
    
    return (
        <div id="mainContent">
            <Navbar key={0} tabs={tabs} communicateActiveTab={setActiveTab} />
            {getActiveTab().component}
        </div>
    )
}