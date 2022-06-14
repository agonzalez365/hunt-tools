import './Bar.css';

import React from 'react';

class Bar extends React.Component {
    render() {
        return (
        <div className='bar'>
            <div className='currBar'>
            </div>
            <div className='prevBar'>
            </div>
        </div>
        );
    }
}

export default Bar;