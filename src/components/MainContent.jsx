import "./css/MainContent.css"

import { useState, useEffect } from 'react'
import { Text, LanguageContext } from '../containers/Language';

import Home from "./Home"
import News from "./News"
import Contact from "./Contact"
import About from "./About"
import Navbar from "./Navbar"

import Hero from "./Hero"

export default function MainContent() {

    const initialTabs = [
        {
            id: 0,
            component: <Home />,
            title: <Text tid="home" />,
            active: false
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
    const [tabs, setTabs] = useState(() => {
        // fetch the active tab id from local storage and set it to new state
        // if no active tab, take the one with id === 0 as the active one (always home)
        // note: Not possible to keep whole tabs object on local storage
        const activeTabId = (JSON.parse(localStorage.getItem("activeTabID")) || 0)
        return initialTabs.map(tab => ({...tab, active: tab.id === activeTabId}))
    })

    // keep local storage up to date which tap is active
    useEffect(() => {
        const activeTabID = getActiveTab().id
        localStorage.setItem("activeTabID", JSON.stringify(activeTabID))    
    }, [tabs] )

    // return the active tab as an object
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
            <div id="header">
                <Hero />
                <Navbar key={0} tabs={tabs} communicateActiveTab={setActiveTab} />
            </div>
            <div id="content">
                {getActiveTab().component}
            </div>
        </div>
    )
}