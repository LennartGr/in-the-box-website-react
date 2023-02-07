import './css/About.css'
import { Text, LanguageContext } from '../containers/Language';

import teamKaissa from '../images/team/Kaissa.png'
import teamBastien from '../images/team/Bastien.png'
import teamLennart from '../images/team/Lennart.png'
import teamIlhiane from '../images/team/Ilhiane.png'

export default function About() {
    const team = [
        {
            firstname: "Kaïssa",
            lastname: "Derbene",
            job: <Text tid="job-Kaissa" />,
            img: teamKaissa
        },
        {
            firstname: "Bastien",
            lastname: "Spiry",
            job: <Text tid="job-Bastien" />,
            img: teamBastien
        },
        {
            firstname: "Lennart",
            lastname: "Großkreutz",
            job: <Text tid="job-Lennart" />,
            img: teamLennart
        },
        {
            firstname: "Ilhiane",
            lastname: "Zarouri",
            job: <Text tid="job-Ilhiane" />,
            img: teamIlhiane
        }
    ]
    const teamCards = team.map(teamMember => {
        return <div key={teamMember.lastname} className='about--teamMember'>
            <img src={teamMember.img} alt='image of team member'/>
            <h3>{teamMember.firstname}<br />{teamMember.lastname}</h3>
            <p className='about--teamMember--job'>{teamMember.job}</p>
        </div>
    })

    return (
        <div id="section--about" className="section">
            <h1><Text tid="about" /></h1>
            <div id="about--team">
                {teamCards}
            </div>
        </div>
    )
}