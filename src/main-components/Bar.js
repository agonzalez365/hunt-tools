import './Bar.css';

import React from 'react';

class Bar extends React.Component {
    render() {
        // calculate the width of the bar to be rendered, then turn it into a string
        // i was surprised this worked in one line, but i think it's because of type coercion
        let barPercent = this.props.val / this.props.maxVal * 100 + '%';
        return (
            <div className='bar'>
                <div className='barInfo'>
                    <span className='barStat'>{this.props.stat}</span>
                    <span className='barVal'>{this.props.val}</span>
                </div>
                <div className='barsContainer'>
                    <div className='currBar' style={{ width: barPercent }}>
                    </div>
                    <div className='prevBar'>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bar;