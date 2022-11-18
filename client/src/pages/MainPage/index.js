import React from 'react';
import './index.scss';
import MainNews from './mainNews';
import matchCard from '../../components/matchCard'

function index(props) {
    return (
        <div className='main'>
            <div>
                <MainNews></MainNews>
            </div>
            <div>
                <matchCard></matchCard>
            </div>    
        </div>
    );
}

export default index;