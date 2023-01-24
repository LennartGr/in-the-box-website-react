import "./css/Navbar.css"
import { Text, LanguageContext } from '../containers/Language';

export default function Navbar(props) {
    const listItems = props.tabs.map(tab => {
        // conditional style active tap by adding extra className
        let currentClassName = "navbar--item"
        if (tab.active) {
            currentClassName += " navbar--item--active"
        }
        // build list item
        return <li className={currentClassName}
            onClick={() => props.communicateActiveTab(tab.id)}>
            {tab.title}
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