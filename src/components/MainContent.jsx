import "./css/MainContent.css"

import { Route, Routes } from "react-router-dom"
import { Text, LanguageContext } from '../containers/Language';

import Home from "./Home"
import News from "./News"
import Contact from "./Contact"
import About from "./About"
import Navbar from "./Navbar"

import Hero from "./Hero"

export default function MainContent() {

    const routesInformation = [
        {
            id: 0,
            element: <Home />,
            path: "/",
            title: <Text tid="home" />,
        },
        {
            id: 1,
            element: <News />,
            path: "/news",
            title: <Text tid="news" />,
        },
        {
            id: 2,
            element: <Contact />,
            path: "/contact",
            title: <Text tid="contact" />,
        },
        {
            id: 3,
            element: <About />,
            path: "/about",
            title: <Text tid="about" />,
        }
    ]

    const routes = routesInformation.map(route =>
        <Route key={route.id} path={route.path} element={route.element} />)

    // attention to position of Routes : Hero and Navbar are not rerendered (Navbar partially by using NavLink's active information)
    return (
        <div id="mainContent">
            <div id="header">
                <Hero />
                <Navbar key={0} routesInformation={routesInformation} />
            </div>
            <div id="content">
                <Routes>
                    {routes}
                </Routes>
            </div>
        </div>
    )
}