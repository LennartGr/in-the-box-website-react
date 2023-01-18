import './css/Hero.css'
import logo from '../images/logo-circular.png'

export default function Hero() {
    return (
        <div id="hero"> 
            <img id="logo" src={logo} alt="our logo" />
            <h1 id="title">In The Box</h1>
        </div>  
    )
}