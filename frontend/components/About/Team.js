import React, {Component} from 'react';
import team1 from '../../images/team1.jpg';
import team2 from '../../images/team2.jpg';
import team3 from '../../images/team3.jpg';

export default class Team extends Component {
    render() {
        return(
            <div className="ourTeam">
                <h3>Our <span>Team</span></h3>
                <ul className="team">
                    <li><img src={team1} alt="" /><a>Team Member One</a><br />
                    He is the most important member of your team. Usually this is the person who started the website. Maybe it is worth to write why he has made such a decision and what has inspired him.</li>
                    <li><img src={team2} alt="" /><a>Another Team Member</a><br />
                    We are completly lost on what he's responsible for, but we hope that you know it ;) We also hope that you will tell it to the rest of the world including us by placing some real text here.</li>
                    <li><img src={team3} alt="" /><a>Another Team Member</a><br />
                    We are completly lost on what he's responsible for, but we hope that you know it ;) We also hope that you will tell it to the rest of the world including us by placing some real text here.</li>
                </ul>
            </div>
        );
    }
}