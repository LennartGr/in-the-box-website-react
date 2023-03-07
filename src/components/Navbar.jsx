import "./css/Navbar.css"
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

export default function Navbar(props) {
    //to avoid warnings
    let currentKey = 0
    let listItems = props.routesInformation.map(route => {
        // conditional style active tap by adding extra className
        let currentClassName = "navbar--item"
        // build list item
        return (<li key={currentKey++} >
            <NavLink to={route.path} className={currentClassName}>
                <div className="navbar--item--text">
                    {route.title}
                </div>
            </NavLink>        
        </li>)
    })
    //add language selector as special list item
    listItems.push(
        <li key={currentKey++}>
            <LanguageSelector />
        </li>)
    //return list items
    return (
        <nav id="navbar">
            <ul id="navbar--list">
                {listItems}
            </ul>
        </nav>
    )
}