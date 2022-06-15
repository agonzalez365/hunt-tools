import './RangeSlider.css';

import React from 'react';

class RangeSlider extends React.Component {
    render() {
        return (
            <div>
                <span class='sliderStat'>{this.props.stat}</span>
                <span class='sliderVal'>{this.props.val}</span>
                <input type='range' className='rangeSlider' min='0' max='500' />
            </div>
        )
    }
}

export default RangeSlider;