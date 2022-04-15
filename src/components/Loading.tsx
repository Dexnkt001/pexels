import React from 'react';

const Loading:React.FC = () => {


    return (
        <div className='loading_cont'>
            <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Loading;