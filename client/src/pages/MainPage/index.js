import React, { useEffect, useState } from 'react';
import Utils from 'utils';
import './index.scss';

import MainNews from './mainNews';
import MatchCard from 'components/matchCard';
import GroupCard from 'components/groupCard';

function Index(props) {
    const [matchData, setMatchData] = useState({});
    const [groupData, setGroupData] = useState([]);

    useEffect(() => {
        let complete = false;

        async function loadData() {
            const response = await Utils.axios.get('/datas/match.json');

            if (!complete) {
                setMatchData(response.data.matchData);
                setGroupData(response.data.groupData);
            }
        }

        loadData();
    }, []);

    return (
        <div className='main'>
            <div>
                <MainNews></MainNews>
            </div>
            <div className='container'>
                <div>
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
                <div>
                    {groupData.length && groupData.map((group, idx) => {
                        return <GroupCard key={idx} group={group}></GroupCard>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Index;