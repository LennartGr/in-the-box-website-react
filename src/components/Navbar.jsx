import "./css/Navbar.css"
import LanguageSelector from "./LanguageSelector";
import { Text, LanguageContext } from '../containers/Language';

export default function Navbar(props) {
    //to avoid warnings
    let currentKey = 0
    let listItems = props.tabs.map(tab => {
        // conditional style active tap by adding extra className
        let currentClassName = "navbar--item"
        if (tab.active) {
            currentClassName += " navbar--item--active"
        }
        // build list item
        return <li key={currentKey++}
            className={currentClassName}
            onClick={() => props.communicateActiveTab(tab.id)}>
            <div className="navbar--item--text">
                {tab.title}
            </div>
        </li>
    })
    //add language selector as special list item
    listItems.push(
        <li key={currentKey++}>         
            <div id="navbar--LanguageSelector" className="navbar--item navbar--item--text">
                <LanguageSelector />
            </div>
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