import React, { useState, useEffect } from 'react';
import Utils from 'utils';
import { useParams } from 'react-router-dom';
import './match.scss';

function Match(props) {
    const { id } = useParams();

    const [targetMatch, setTargetMatch] = useState({
        group: null,
        date: null,
        time: null,
        teams: [],
    });

    const getTargetMatch = function (matchs) {
        setTargetMatch(matchs.groupStage.filter((item) => item.id.toString() === id)[0]);
    }

    useEffect(() => {
        let complete = false;

        async function loadData() {
            const response = await Utils.axios.get('/datas/match.json');

            if (!complete) {
                getTargetMatch(response.data.matchData)
            }
        }

        loadData();
    }, []);

    return (
        <div className='container'>
            <div className='logo-div'>
                <img className='logo2' src="/assets/qatar_logo2.png" alt="" />
            </div>
            <div className='match-div'>
                <div className='match-schedule'>
                    <div className='groupInfor'>
                        <strong>
                            Group {targetMatch.group}
                        </strong>
                    </div>
                    <div className='match-time'>
                        <strong>
                            {targetMatch.date} {targetMatch.time}
                        </strong>
                    </div>    
                </div>
                <div className='match-infor'>
                    <div className='left-team'>
                        <div>
                            <strong>{Object.keys(targetMatch.teams)[0]}</strong>    
                        </div>
                        <div>
                            <img className='flag' src={`/assets/flags/${Object.keys(targetMatch.teams)[0]}.png`} alt="" />
                        </div>
                    </div>
                    <div>
                        {targetMatch.finish ? 
                            <div> 
                                {targetMatch.teams[Object.keys(targetMatch.teams)[0]].score}&nbsp;:&nbsp;
                                {targetMatch.teams[Object.keys(targetMatch.teams)[1]].score}
                            </div> :
                            <div> 
                                {targetMatch.time}
                            </div>
                         }
                    </div>
                    <div className='right-team'>
                        <img className='flag' src={`/assets/flags/${Object.keys(targetMatch.teams)[1]}.png`} alt="" />
                        <strong>{Object.keys(targetMatch.teams)[1]}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Match;