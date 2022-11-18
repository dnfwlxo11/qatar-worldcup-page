import React from 'react';
import './groupCard.scss'

function groupCard(props) {
    return (
        <div className='card'>
            <table>
                <thead>
                    <tr>
                        <th colspan='3'>GROUP A</th>
                        <th>P</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GD</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>FLAG</td>
                        <td>KOR</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default groupCard;