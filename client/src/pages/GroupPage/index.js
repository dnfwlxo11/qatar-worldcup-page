import React, { useState } from 'react';
import './index.scss';

import GroupStage from './groupStage';
import Tournament from './tournament';

function Index(props) {
    const [currStage, setCurrStage] = useState('group');
    const onClickMenu = (stage) => {
        setCurrStage(stage);
    }

    return (
        <div>
            <div className='container'>
                <div className='group-detail'>
                    <div className='card'>
                        <div className='card-top'>
                            <div className={`menu ${currStage === 'group' ? 'active' : ''}`} onClick={() => onClickMenu('group')}>Group Stage</div>
                            <div className={`menu ${currStage === 'tournament' ? 'active' : ''}`} onClick={() => onClickMenu('tournament')}>Tournament</div>
                        </div>
                        {currStage === 'group' ?
                            <GroupStage></GroupStage>
                            :<Tournament></Tournament>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;