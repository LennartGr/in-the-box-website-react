import "./css/Navbar.css"
import { Text, LanguageContext } from '../containers/Language';

export default function Navbar(props) {
    //to avoid warnings
    let currentKey = 0
    const listItems = props.tabs.map(tab => {
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
    }

    )
    return (
        <nav id="navbar">
            <ul id="navbar--list">
                {listItems}
            </ul>
        </nav>
    )
}