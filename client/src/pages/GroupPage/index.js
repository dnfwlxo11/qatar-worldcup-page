import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import './index.scoped.scss';

import GroupCard from 'components/groupCard';

function Index(props) {
    const [groupData, setGroupData] = useState(null);
    const [currGroup, setCurrGroup] = useState('A')
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

                setGroupData(groupDataByGroup);
                console.log(groupDataByGroup)
            }
        }

        loadData();
    }, []);

    const handleScrollX = (pos) => {
        scrollBar.current.scrollBy(pos, 0);
    }

    const onClickGroup = (group) => {
        setCurrGroup(group);
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
                    <div className='card-content'>
                        {Object.keys(groupData).map((group, idx) => {
                            return <GroupCard key={idx} group={groupData[group]}></GroupCard>
                        })}
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