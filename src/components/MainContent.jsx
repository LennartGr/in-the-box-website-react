import "./css/MainContent.css"

import { Route, Routes } from "react-router-dom"
import { Text, LanguageContext } from '../containers/Language';

import Home from "./Home"
import News from "./News"
import Contact from "./Contact"
import About from "./About"
import Navbar from "./Navbar"
import NotFound from "./NotFound"

import Hero from "./Hero"

export default function MainContent() {

    // title is communicated to the navbar
    // one can define whether a route is relevant for the navbar (NotFound route is not)
    const routesInformation = [
        {
            id: 0,
            element: <Home />,
            path: "/",
            title: <Text tid="home" />,
            navbarRelevant: true
        },
        {
            id: 1,
            element: <News />,
            path: "/news",
            title: <Text tid="news" />,
            navbarRelevant: true
        },
        {
            id: 2,
            element: <Contact />,
            path: "/contact",
            title: <Text tid="contact" />,
            navbarRelevant: true
        },
        {
            id: 3,
            element: <About />,
            path: "/about",
            title: <Text tid="about" />,
            navbarRelevant: true
        },
        {
            id: 4,
            element: <NotFound />,
            path: "/*",
            title: "",
            navbarRelevant: false
        }
    ]

    const routes = routesInformation.map(route =>
        <Route key={route.id} path={route.path} element={route.element} />)

    // attention to position of Routes : Hero and Navbar are not rerendered (Navbar partially by using NavLink's active information)
    return (
        <div id="mainContent">
            <div id="header">
                <Hero />
                <Navbar key={0} routesInformation={routesInformation.filter(route => route.navbarRelevant)} />
            </div>
            <div id="content">
                <Routes>
                    {routes}
                </Routes>
            </div>
        </div>
    )
}