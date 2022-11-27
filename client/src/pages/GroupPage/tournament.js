import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';

import './tournament.scoped.scss';

function Tournament(props) {
    const [matchData, setMatchData] = useState(null);
    const [currRound, setCurrRound] = useState('roundOf16');
    const scrollBar = useRef();

    useEffect(() => {
        let complete = false;

        async function loadData() {
            const response = await axios.get('/datas/match.json');

            if (!complete) {
                const matchByTournament = response.data.matchData.tournament;

                console.log(matchByTournament)

                setMatchData(matchByTournament);
            }
        };

        loadData();
    }, []);

    const onClickRound = (round) => {
        setCurrRound(round);
    }

    const handleScrollX = (pos) => {
        scrollBar.current.scrollBy(pos, 0);
    }

    return (
        <div>
            {matchData ? 
            <div>
                <div className='card-nav'>
                    <div className='arrow-btn' onClick={() => handleScrollX(-100)}>
                        <AiOutlineDoubleLeft />
                    </div>
                    <div className='card-menu' ref={scrollBar}>
                        {Object.keys(matchData).map((round, idx) => {
                            return <div className={`menu ${currRound === round ? 'active' : ''}`} key={idx} onClick={() => onClickRound(round)}>{round}</div>
                        })}    
                    </div>
                    <div className='arrow-btn' onClick={() => handleScrollX(100)}>
                        <AiOutlineDoubleRight />
                    </div>
                </div>
                <hr style={{ 'border': '1px solid lightgrey' }} />
                <div className='card-content'>
                </div>
            </div>
            : <div className='loading'>
                <FaSpinner icon="spinner" className="spinner" />
            </div>}
        </div>
    );
}

export default Tournament;