import React from 'react';
import './footerbar.scoped.scss';
import { AiFillGithub, AiFillMail } from 'react-icons/ai'

function footerbar() {
    return (
        <div className='footerbar'>
            <div>
                <a href='https://github.com/dnfwlxo11' target='_blank' rel='noreferrer'>
                    <strong>대추</strong>
                </a>
            </div>
            <div className='link-btns'>
                <a href='https://github.com/dnfwlxo11/qatar-worldcup-page' target='_blank' rel='noreferrer'><AiFillGithub className='link-btn'  rel='noopener' /></a>
                <a href='mailto:"dnfwlxo11@gmail.com"' target='_blank' rel='noreferrer'><AiFillMail className='link-btn' /></a>
            </div>
        </div>
    );
}

export default footerbar;