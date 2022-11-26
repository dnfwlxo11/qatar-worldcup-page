import React from 'react';
import { useNavigate } from 'react-router-dom';

import './matchCard.scoped.scss';

function MatchCard(props) {
    const match = props.match;
    const navigate = useNavigate();

    function onClickMatchCard(e) {
        e.preventDefault();
        navigate(`/match/${match.id}`);
    }

    return (
        <div className='matchCard' onClick={onClickMatchCard}>
            <div className='match-infor'>
                <div className='match-stat'>
                    Group {match.group}
                </div>
                <div className='match-schedule'>
                    {match.date}
                </div>
            </div>
            <div className='team-infor'>
                <div className='teams'>
                    <div className='team'>
                        <img className='flag' src={`/assets/flags/${Object.keys(match.teams)[0]}.png`} alt="국기1" />
                        <span className='country'>{Object.keys(match.teams)[0]}</span>
                    </div>
                    <div className='team'>
                        <img className='flag' src={`/assets/flags/${Object.keys(match.teams)[1]}.png`} alt="국기2" />
                        <span className='country'>{Object.keys(match.teams)[1]}</span>
                    </div>    
                </div>
                <div className='match-time'>
                    { match.finish ? 
                        <div className='teams'>
                            <div className='team'>
                                <strong>{match.teams[Object.keys(match.teams)[0]].score}</strong>
                            </div>
                            <div className='team'>
                                <strong>{match.teams[Object.keys(match.teams)[1]].score}</strong>
                            </div>
                        </div> :
                        <strong>{match.time}</strong> 
                    }
                </div>
            </div>
        </div>
    );
}

export default MatchCard;