import './Bar.css';

import React from 'react';

class Bar extends React.Component {
    render() {
        // calculate the percentage of the bar to be filled, then turn it into a string
        let barPercent = this.props.val / this.props.maxVal * 100;

        //make sure value isnt too high
        if(barPercent > this.props.maxVal){
            barPercent = this.props.maxVal;
            barPercent += '%';
        }
        else {
            barPercent += '%';
        }
        return (
            <div className='bar'>
                <div className='barInfo'>
                    <span className='barStat'>{this.props.stat}</span>
                    <span className='barVal' style={{ marginLeft: '0.5rem' }}>{this.props.val} {this.props.append}</span>
                </div>
                <div className='barsContainer'>
                    <div className='currBar' style={{ width: barPercent }}>
                    </div>
                    {/* previous data bar not */}
                    <div className='prevBar'>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bar;