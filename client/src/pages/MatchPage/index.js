import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Utils from 'utils';
import './index.scss';

import MatchCard from 'components/matchCard';
import { FaSpinner } from 'react-icons/fa';

function Index(props) {
    const isFull = useMediaQuery({
        query: '(min-width: 1280px)'
    });

    const isHalf = useMediaQuery({
        query: '(min-width:960px) and (max-width:1280px)'
    });

    const [matchData, setMatchData] = useState(null);

    useEffect(() => {
        let complete = false;

        async function loadData() {
            const response = await Utils.axios.get('/datas/match.json');

            if (!complete) {
                const matchDataByDate = response.data.matchData.groupStage.reduce((acc, item, idx) => {
                    if (!acc.hasOwnProperty(item.date)) {
                        acc[item.date] = [item];
                    } else {
                        acc[item.date].push(item)
                    }

                    return acc;
                }, {})

                setMatchData(matchDataByDate);
            }
        }

        loadData();
    }, []);


    return (
        <div>
            {matchData ? <div className='container'>
                <div className='match-detail'>
                    <div className='title'>
                        <strong>
                            Matchs
                        </strong>
                    </div>
                    {Object.keys(matchData).length && Object.keys(matchData).map((date, idx) => {
                        return <div key={idx} style={{ 'marginBottom': '30px' }}>
                            <div style={{
                                'marginBottom': '10px',
                                'fontSize': '17px'
                            }}>
                                <strong>{date}</strong>
                            </div>
                            <div className={`matchs matchs${isFull ? '-1' : isHalf ? '-2' : '-3'}`}>
                                {matchData[date].map((match, idx) => {
                                    return <MatchCard key={idx} match={match}></MatchCard> 
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </div>
            : <div className='loading'>
                <FaSpinner icon="spinner" className="spinner" />
            </div>}
        </div>
    );
}

export default Index;