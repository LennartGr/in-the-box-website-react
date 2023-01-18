import './css/Hero.css'
import logo from '../images/logo-circular.png'
import LanguageSelector from './LanguageSelector'

export default function Hero() {
    return (
        <div id="hero">
            <div className="left"><LanguageSelector /></div>   
            <div id="hero--logotitle" className="center">
                <img id="logo" src={logo} alt="our logo" />
                <h1 id="title">In The Box</h1>
            </div>
            <div class="right"></div>
        </div>
    )
}