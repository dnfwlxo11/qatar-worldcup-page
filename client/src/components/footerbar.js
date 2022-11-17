import React from 'react';
import './footerbar.scss';
import { AiFillGithub, AiFillMail } from 'react-icons/ai'

function footerbar(props) {
    return (
        <div className='footerbar'>
            <div>
                <a href='https://github.com/dnfwlxo11'>
                    <strong>대추</strong>
                </a>
            </div>
            <div className='link-btns'>
                <a href='https://github.com/dnfwlxo11/qatar-worldcup-page' target='_blank' ><AiFillGithub className='link-btn' /></a>
                <a href='mailto:"dnfwlxo11@gmail.com"' target='_blank' ><AiFillMail className='link-btn' /></a>
            </div>
        </div>
    );
}

export default footerbar;