import { Text, LanguageContext } from '../containers/Language';
import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';

export default function NotFound() {
    const timeBeforeRedirect = 2000;
    const navigate = useNavigate()

    // redirect to homepage after certain time
    useEffect(() => {
        setTimeout(() => {
            navigate("/", {replace: true})
        }, timeBeforeRedirect)
    }, [])

    return (
        <div className="section">
            <Text tid="not-found" />
        </div>
    )
}