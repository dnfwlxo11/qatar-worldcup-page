import React from 'react';
import './index.scss';
import MainNews from './mainNews';
import MatchCard from 'components/matchCard';
import GroupCard from 'components/groupCard';

function index(props) {
    return (
        <div className='main'>
            <div>
                {/* <MainNews></MainNews> */}
            </div>
            <div>
                <MatchCard></MatchCard>
            </div>
            <div>
                <GroupCard></GroupCard>
            </div>
        </div>
    );
}

export default index;