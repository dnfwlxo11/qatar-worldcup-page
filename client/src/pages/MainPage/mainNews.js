import React from 'react';
import './mainNews.scoped.scss';

function mainNews(props) {
    return (
        <div className='main-news-img'>
            <img className='news-img' src="/assets/players/full/son-full.png" alt="메인 뉴스 이미지" />
            <div className='news-content'>
                <div className='title'>
                    <strong>SON, South korea captain!</strong>    
                </div>
                <div className='content'>
                    <small>Korea, win possable?</small>
                </div>
            </div>
        </div>
    );
}

export default mainNews;