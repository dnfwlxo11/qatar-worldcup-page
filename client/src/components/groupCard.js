import React, { useState, useEffect, useMemo } from 'react';
import './groupCard.scss'

function GroupCard(props) {
    const [isSorted, setIsSorted] = useState(false);
    const group = useMemo(() => {
        function cmp(a, b) {
            if (a.points < b.points) return 1;
            else if (a.points === b.points) {
                if (a.gd < b.gd) {
                    return 1;
                }  else if (a.gd === b.gd) {
                    if (a.play > b.play) {
                        return 1;
                    } else if (a.play === b.play) {
                        if (a.name < b.name) {
                            return 1;
                        } else {
                            return -1;
                        }
                    } else {
                        return -1;
                    }
                } else {
                    return -1;
                }
            } else {
                return -1;
            }
        }

        props.group.entry.sort(cmp);
        setIsSorted(true);

        return props.group;
    }, [props.group]);

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
                    {isSorted && Object.keys(group.entry).length && Object.keys(group.entry).map((country, idx) => {
                        return (
                            <tr key={idx+1}>
                                <td className='rank'>{idx + 1}</td>
                                <td className='country-td' colSpan='2'>
                                    <div>
                                        <img className='flag' src={`/assets/flags/${group.entry[country].name}.png`} alt="" />    
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