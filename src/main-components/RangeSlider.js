import './RangeSlider.css';

import React from 'react';

class RangeSlider extends React.Component {
    render() {
        return (
            <div className='rangeSliderContainer'>
                <span className='sliderStat'>{this.props.stat}</span>
                <span className='sliderVal'>{this.props.val}</span>
                <input type='range' className='rangeSliderInput' min={this.props.minVal} max={this.props.maxVal} val={this.props.val} step='1' />
            </div>
        )
    }
}

export default RangeSlider;