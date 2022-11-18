import React from 'react';
import './mainNews.scss';

function mainNews(props) {
    return (
        <div className='main-news-img'>
            <img className='news-img' src="/assets/players/full/son-full.png" alt="메인 뉴스 이미지" />
            <div className='news-content'>
                <div className='title'>
                    <strong>SON, South Korea captain!</strong>    
                </div>
                <div className='content'></div>
            </div>
        </div>
    );
}

export default mainNews;