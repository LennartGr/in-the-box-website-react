import './css/Hero.css'
import logo from '../images/logo.svg'

export default function Hero() {
    return (
        <div id="hero">
            <div id="header-images">
                <img id="logo-background-blur" src={logo} />
                <img id="logo" src={logo} alt="our logo" />
            </div>
            <h1 id="title">In The Box</h1>
        </div>
    )
}