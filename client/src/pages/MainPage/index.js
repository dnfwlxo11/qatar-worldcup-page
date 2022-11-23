import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { axios, dateUtils } from 'utils';
import './index.scoped.scss';

import MainNews from './mainNews';
import MatchCard from 'components/matchCard';
import GroupCard from 'components/groupCard';

function Index(props) {
    const navigate = useNavigate();

    function onClickMatchs(e) {
        e.preventDefault();
        navigate(`/matchs`);
    }

    function onClickGroups(e) {
        e.preventDefault();
        navigate(`/groups`);
    }

    const isFull = useMediaQuery({
        query: '(min-width: 1280px)'
    });

    const isHalf = useMediaQuery({
        query: '(min-width:960px) and (max-width:1280px)'
    });

    const [matchData, setMatchData] = useState({});
    const [groupData, setGroupData] = useState([]);

    useEffect(() => {
        let complete = false;

        async function loadData() {
            const response = await axios.get('/datas/match.json');

            if (!complete) {
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
            <div style={{ 'display': 'flex '}}>
                <MainNews></MainNews>
            </div>
            <div className='container'>
                <div style={{ 'marginBottom': '40px' }}>
                    <div className='title'>
                        <div style={{ 'display': 'flex '}}>
                            <div style={{ 'marginRight': 'auto' }}>
                                <strong style={{ 'fontSize': '30px' }}>
                                    Match
                                </strong>
                            </div>
                            <div style={{ 'marginLeft': 'auto', 'display': 'flex', 'alignItems': 'center' }}>
                                <span className='matchs-btn' onClick={onClickMatchs}>
                                    detail
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr style={{ 'marginBottom': '20px' }} />
                    {Object.keys(matchData).length && Object.keys(matchData).map((date, idx) => {
                        return date === dateUtils.dateFormat(new Date(), 'yyyy.MM.dd') 
                        && <div key={idx} style={{ 'marginBottom': '20px' }}>
                            <div style={{ 'marginBottom': '10px', 'fontSize': '17px' }}>
                                <strong>{date}</strong>
                            </div>
                            <div className={`matchs matchs${isFull ? '-1' : isHalf ? '-2' : '-3'}`}>
                                {date === dateUtils.dateFormat(new Date(), 'yyyy.MM.dd') && matchData[date].map((match, idx) => {
                                    return <MatchCard key={idx} match={match}></MatchCard> 
                                })}
                            </div>
                        </div>
                    })}
                </div>
                <div style={{ 'marginBottom': '20px' }}>
                    <div className='title'>
                        <div style={{ 'display': 'flex '}}>
                            <div style={{ 'marginRight': 'auto' }}>
                                <strong style={{ 'fontSize': '30px' }}>
                                    Group
                                </strong>
                            </div>
                            <div style={{ 'marginLeft': 'auto', 'display': 'flex', 'alignItems': 'center' }}>
                                <span className='matchs-btn' onClick={onClickGroups}>
                                    detail
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr style={{ 'marginBottom': '20px' }} />
                    <div className={`groups groups${isFull ? '-2' : '-1'}`}>
                        {groupData.length && groupData.map((group, idx) => {
                            return <GroupCard key={idx} group={group}></GroupCard>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;