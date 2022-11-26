import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import './index.scoped.scss';

import MatchCard from 'components/matchCard';
import GroupCard from 'components/groupCard';

function Index(props) {
    const [matchData, setMatchData] = useState(null);
    const [groupData, setGroupData] = useState(null);
    const [currGroup, setCurrGroup] = useState('A')
    const [currGroupMatchs, setCurrGroupMatchs] = useState(null);
    const scrollBar = useRef();

    useEffect(() => {
        let complete = false;

        async function loadData() {
            const response = await axios.get('/datas/match.json');

            if (!complete) {
                const groupDataByGroup = response.data.groupData.reduce((acc, item, idx) => {
                    acc[item.groupName] = item;

                    return acc;
                }, {})

                const matchs = response.data.matchData.groupStage;

                setMatchData(matchs);
                setGroupData(groupDataByGroup);

                setCurrGroupMatchs(matchs.reduce((acc, item, idx) => {
                    if (item.group === currGroup) acc.push(item);
    
                    return acc;
                }, [])
                .reduce((acc, item, idx) => {
                    if (!acc.hasOwnProperty(item.date)) {
                        acc[item.date] = [item];
                    } else {
                        acc[item.date].push(item)
                    }
    
                    return acc;
                }, {})
            );
            }
        }

        loadData();
    }, []);

    const handleScrollX = (pos) => {
        scrollBar.current.scrollBy(pos, 0);
    }

    const onClickGroup = (group) => {
        setCurrGroup(group);

        setCurrGroupMatchs(
            matchData.reduce((acc, item, idx) => {
                if (item.group === group) acc.push(item);

                return acc;
            }, [])
            .reduce((acc, item, idx) => {
                if (!acc.hasOwnProperty(item.date)) {
                    acc[item.date] = [item];
                } else {
                    acc[item.date].push(item)
                }

                return acc;
            }, {})
        );
    }

    return (
        <div>
            <div className='container'>
                {groupData ? <div className='card'>
                    <div className='card-top'>
                        <div className='menu'>Group Stage</div>
                        <div className='menu'>Tournament</div>
                    </div>
                    <div className='card-nav'>
                        <div className='arrow-btn' onClick={() => handleScrollX(-100)}>
                            <AiOutlineDoubleLeft />
                        </div>
                        <div className='card-menu' ref={scrollBar}>
                            {Object.keys(groupData).map((group, idx) => {
                                return <div className={`menu ${currGroup === group ? 'active' : ''}`} key={idx} onClick={() => onClickGroup(group)}>Group {groupData[group].groupName}</div>
                            })}    
                        </div>
                        <div className='arrow-btn' onClick={() => handleScrollX(100)}>
                            <AiOutlineDoubleRight />
                        </div>
                    </div>
                    <hr style={{ 'border': '1px solid lightgrey' }} />
                    <div className='card-content'>
                        <div style={{ 'marginBottom': '40px' }}>
                            {Object.keys(groupData).map((group, idx) => {
                                return group === currGroup &&
                                    <GroupCard key={idx} group={groupData[group]}></GroupCard>
                            })}    
                        </div>
                        <div>
                            {currGroupMatchs && Object.keys(currGroupMatchs).map((date, idx) => {
                                return currGroupMatchs[date].map((match, idx) => {
                                    return <MatchCard className='matchCard' key={idx} match={match}></MatchCard> 
                                })
                            })}
                        </div>
                    </div>
                </div>
                : <div className='loading'>
                    <FaSpinner icon="spinner" className="spinner" />
                </div>}
            </div>
        </div>
    );
}

export default Index;