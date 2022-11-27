import React, { useState, useEffect } from 'react';
import Utils from 'utils';
import { useParams } from 'react-router-dom';
import './match.scoped.scss';
import { FaSpinner } from 'react-icons/fa';

function Match(props) {
    const { id } = useParams();

    const [targetMatch, setTargetMatch] = useState(null);

    useEffect(() => {
        let complete = false;

        async function loadData() {
            const response = await Utils.axios.get('/datas/match.json');

            if (!complete) {
                setTargetMatch(response.data.matchData.groupStage.filter((item) => item.id.toString() === id)[0]);
            }
        }

        loadData();
    }, []);

    return (
        <div className='container'>
            <div className='logo-div' style={{ 'marginBottom': '40px' }}>
                <img className='logo2' src="/assets/qatar_logo2.png" alt="" />
            </div>
            {targetMatch ? <div className='match-div'>
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
                            <strong>{Object.keys(targetMatch.teams)[0].toUpperCase()}</strong>    
                        </div>
                        <div>
                            <img className='flag' src={`/assets/flags/${Object.keys(targetMatch.teams)[0]}.png`} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className={`badge ${targetMatch.finish ? 'badge-before' : 'badge-after'}`} style={{ 'marginBottom': '5px' }}>
                            {targetMatch.finish ? 
                            <div>경기종료</div>
                            : <div>경기전</div>}
                        </div>
                        <div style={{ 'textAlign': 'center' }}>
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
                    </div>
                    <div className='right-team'>
                        <img className='flag' src={`/assets/flags/${Object.keys(targetMatch.teams)[1]}.png`} alt="" />
                        <strong>{Object.keys(targetMatch.teams)[1].toUpperCase()}</strong>
                    </div>
                </div>
            </div>
            : <div className='loading'>
                <FaSpinner icon="spinner" className="spinner" />
            </div>}
        </div>
    );
}

export default Match;