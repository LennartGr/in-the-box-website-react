import "./css/Navbar.css"

export default function Navbar() {
    return (
        <nav id="navbar">
            <ul id="navbar--list">
                <li class="navbar--item"><a href="default.asp">Home</a></li>
                <li class="navbar--item"><a href="news.asp">News</a></li>
                <li class="navbar--item"><a href="contact.asp">Contact</a></li>
                <li class="navbar--item"><a href="about.asp">About</a></li>
              </ul> 
        </nav>
    )
}