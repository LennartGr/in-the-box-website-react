import { Text, LanguageContext } from '../containers/Language';

export default function Contact() {
    // idea: button that copies mail to clipboard
    return (
        <div id="section--contact" className="section">
            <h1><Text tid="contact" /></h1>
            <p><Text tid="contact-mail" /></p>
            <p><a href="in.the.box.klgb@gmail.com">in.the.box.klgb@gmail.com</a></p>
        </div>
    )
}