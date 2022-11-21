import React, { useEffect, useState } from 'react';
import Utils from 'utils';
import './index.scss';

import MatchCard from 'components/matchCard';

function Index(props) {
    const [matchData, setMatchData] = useState({});

    useEffect(() => {
        let complete = false;

        async function loadData() {
            const response = await Utils.axios.get('/datas/match.json');

            if (!complete) {
                setMatchData(response.data.matchData);
            }
        }

        loadData();
    }, []);


    return (
        <div>
            <div className='container'>
                <div className='title'>
                    <strong>
                        Match
                    </strong>    
                </div>
                <div className='content'>
                    {matchData.groupStage && matchData.groupStage.map((match, idx) => {
                        return <MatchCard key={idx} match={match}></MatchCard> 
                    })}
                </div>
            </div>
        </div>
    );
}

export default Index;