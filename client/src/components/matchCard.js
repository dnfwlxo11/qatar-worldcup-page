import React from 'react';
import './matchCard.scss';

function matchCard(props) {
    return (
        <div className='card card-4'>
            <div className='match-infor'>
                <div className='match-stat'>
                    Match 1, Group A
                </div>
                <div className='match-schedule'>
                    21 Nov 2022
                </div>
            </div>
            <div className='team-infor'>
                <div className='teams'>
                    <div className='team'>
                        <img className='flag' src="/assets/flags/qatar.png" alt="국기1" />
                        <span className='country'>Qatar</span>
                    </div>
                    <div className='team'>
                        <img className='flag' src="/assets/flags/equador.png" alt="국기2" />
                        <span className='country'>Ecuador</span>
                    </div>    
                </div>
                <div className='match-time'>
                    <strong>01:00</strong>
                </div>
            </div>
        </div>
    );
}

export default matchCard;