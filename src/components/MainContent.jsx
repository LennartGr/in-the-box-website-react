import { useState, useEffect } from 'react'
import { Text, LanguageContext } from '../containers/Language';

import Home from "./Home"
import News from "./News"
import Contact from "./Contact"
import About from "./About"
import Navbar from "./Navbar"

export default function MainContent() {

    //the active information is currently not used
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
            active: true
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
    
    const [activeId, setActiveId] = useState(0)

    function changeActiveId(id) {
        setActiveId(id)
    }

    function testLog(text) {
        //const text = "new"
        console.log(text)
    }

    function getActiveTab() {
        for (let i = 0; i < initialTabs.length; i++) {
            if (initialTabs[i].id === activeId) {
                return initialTabs[i]
            }
        }
    }

    //DEPRECATED 
    //Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
    
    const [tabs, setTabs] = useState(initialTabs)

    
    function getActiveTabDeprecated() {
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].active) {
                return tabs[i]
            } 
        }
    }


    //set the active tab to the one with this id
    function setActiveTabDeprecated(id) {   
        setTabs( prevTabs => ({...prevTabs}))
    }
    

    
    return (
        <div id="mainContent">
            <Navbar />
            <button onClick={() => setActiveTabDeprecated(2)}>Test</button>
            {getActiveTab().component}
        </div>
    )
}