import React, { useEffect } from 'react';
import './groupCard.scss'

function GroupCard(props) {
    const group = props.group

    useEffect(() => {
        console.log('group', group);
    }, [])

    return (
        <div className='card card-2'>
            <table>
                <thead>
                    <tr>
                        <th className='groupName' colSpan='3'>GROUP {group.groupName}</th>
                        <th width="10%">P</th>
                        <th width="10%">W</th>
                        <th width="10%">D</th>
                        <th width="10%">L</th>
                        <th width="10%">GD</th>
                        <th width="10%">Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(group.entry).length && Object.keys(group.entry).map((country, idx) => {
                        return (
                            <tr key={idx+1}>
                                <td className='rank'>{idx + 1}</td>
                                <td className='country-td' colSpan='2'>
                                    <div>
                                        <img className='flag' src={`/assets/flags/${country}.png`} alt="" />    
                                    </div>
                                    <div className='country-name'>
                                        <strong>{group.entry[country].abb}</strong>    
                                    </div>
                                </td>
                                <td>{group.entry[country].play}</td>
                                <td>{group.entry[country].win}</td>
                                <td>{group.entry[country].draw}</td>
                                <td>{group.entry[country].loss}</td>
                                <td>{group.entry[country].gd}</td>
                                <td>{group.entry[country].points}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GroupCard;