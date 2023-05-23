import { Text, LanguageContext } from '../containers/Language';

export default function Home() {
    return (
        <div id="section--home" className="section">
            <h1><Text tid="home" /></h1>
            {/* <h2><Text tid="home-objective-title" /></h2> */}
            <p><Text tid="home-first-paragraph" /></p>
            <p><Text tid="home-second-paragraph" /></p>
        </div>
    )
}