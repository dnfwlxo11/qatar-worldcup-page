import React from 'react';
import './groupCard.scss'

function groupCard(props) {
    const groupData = {
    }

    return (
        <div className='card card-4'>
            <table>
                <thead>
                    <tr>
                        <th className='groupName' colSpan='3'>GROUP A</th>
                        <th width="10%">P</th>
                        <th width="10%">W</th>
                        <th width="10%">D</th>
                        <th width="10%">L</th>
                        <th width="10%">GD</th>
                        <th width="10%">Pts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='rank'>1</td>
                        <td className='country-td' colSpan='2'>
                            <div>
                                <img className='flag' src="/assets/flags/qatar.png" alt="" />    
                            </div>
                            <div className='country-name'>
                                <strong>QAT</strong>    
                            </div>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className='rank'>2</td>
                        <td className='country-td' colSpan='2'>
                            <div>
                                <img className='flag' src="/assets/flags/equador.png" alt="" />    
                            </div>
                            <div className='country-name'>
                                <strong>ECU</strong>    
                            </div>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className='rank'>3</td>
                        <td className='country-td' colSpan='2'>
                            <div>
                                <img className='flag' src="/assets/flags/senegal.png" alt="" />    
                            </div>
                            <div className='countryName'>
                                <strong>SEN</strong>
                            </div>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td className='rank'>4</td>
                        <td className='country-td' colSpan='2'>
                            <div>
                                <img className='flag' src="/assets/flags/netherlands.png" alt="" />    
                            </div>
                            <div className='country-name'>
                            <strong>NED</strong>
                            </div>
                        </td>
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