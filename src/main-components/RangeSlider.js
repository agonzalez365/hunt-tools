import './RangeSlider.css';

import React from 'react';

class RangeSlider extends React.Component {
    render() {
        return (
            <div className='rangeSliderContainer'>
                <span className='sliderStat'>{this.props.stat}</span>
                <span className='sliderVal'></span>
                <input type='range' className='rangeSliderInput' min='0' max='500' />
            </div>
        )
    }
}

export default RangeSlider;