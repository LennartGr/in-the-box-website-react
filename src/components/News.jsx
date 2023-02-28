import { Text, LanguageContext } from '../containers/Language';

export default function News() {
    return (
        <div id="section--news" className="section">
            <h1><Text tid="news" /></h1>
            <p><Text tid="news-no-news" /></p>
        </div>
    )
}