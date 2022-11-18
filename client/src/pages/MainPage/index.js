import React from 'react';
import './index.scss';
import MainNews from './mainNews';
import MatchCard from 'components/matchCard';

function index(props) {
    return (
        <div className='main'>
            <div>
                <MainNews></MainNews>
            </div>
            <div>
                <MatchCard></MatchCard>
            </div>    
        </div>
    );
}

export default index;