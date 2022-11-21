import React from 'react';
import './matchCard.scss';

function matchCard(props) {
    const match = props.match;

    return (
        <div className='card card-2'>
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

export default matchCard;