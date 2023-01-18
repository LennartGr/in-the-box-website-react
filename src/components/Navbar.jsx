import "./css/Navbar.css"
import { Text, LanguageContext } from '../containers/Language';

export default function Navbar() {
    return (
        <nav id="navbar">
            <ul id="navbar--list">
                <li class="navbar--item"><a href="default.asp"><Text tid="home" /></a></li>
                <li class="navbar--item"><a href="news.asp"><Text tid="news" /></a></li>
                <li class="navbar--item"><a href="contact.asp"><Text tid="contact" /></a></li>
                <li class="navbar--item"><a href="about.asp"><Text tid="about" /></a></li>
              </ul> 
        </nav>
    )
}