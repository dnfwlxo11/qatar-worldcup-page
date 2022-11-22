import React, { useEffect, useState } from 'react';
import { useMediaQuery } from "react-responsive";

import Utils from 'utils';
import './index.scoped.scss';

import MainNews from './mainNews';
import MatchCard from 'components/matchCard';
import GroupCard from 'components/groupCard';

function Index(props) {
    const isFull = useMediaQuery({
        query: "(min-width: 1280px)"
    });

    const isHalf = useMediaQuery({
        query: "(min-width:960px) and (max-width:1280px)"
    });

    const [matchData, setMatchData] = useState({});
    const [groupData, setGroupData] = useState([]);

    useEffect(() => {
        let complete = false;

        async function loadData() {
            const response = await Utils.axios.get('/datas/match.json');

            if (!complete) {
                console.log('match data:', );
                const matchDataByDate = response.data.matchData.groupStage.reduce((acc, item, idx) => {
                    if (!acc.hasOwnProperty(item.date)) {
                        acc[item.date] = [item];
                    } else {
                        acc[item.date].push(item)
                    }

                    return acc;
                }, {})

                console.log(matchDataByDate)

                setMatchData(matchDataByDate);
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
                <div style={{ 'marginBottom': '20px' }}>
                    <div className='title'>
                        <div>
                            <strong style={{ "margin-right": "auto", "font-size": "30px" }}>
                                Match
                            </strong>
                            <span style={{ "margin-left": "auto" }}>
                                Drop Down
                            </span>
                        </div>
                    </div>
                    <hr style={{ "marginBottom": '20px' }} />
                    {Object.keys(matchData).length && Object.keys(matchData).map((date, idx) => {
                        return <div style={{ "marginBottom": "20px" }}>
                            <div style={{
                                "marginBottom": "10px",
                                "font-size": "17px"
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
                <div className={`groups groups${isFull ? '-2' : '-1'}`}>
                    {groupData.length && groupData.map((group, idx) => {
                        return <GroupCard key={idx} group={group}></GroupCard>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Index;