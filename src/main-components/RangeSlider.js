import './RangeSlider.css';

import React from 'react';
import Slider from 'rc-slider';

class RangeSlider extends React.Component {
    render() {

        return (
            <div className='rangeSliderContainer'>
                <span className='sliderStat'>{this.props.stat}</span>
                <span className='sliderVal'>{this.props.val}</span>
                <Slider min={0} max={500} step={1} draggableTrack={true} defaultValue={10}
                trackStyle={{
                    backgroundColor: '#faefed',
                    height: '11px',
                    borderRadius: '0.1rem'
                }}
                />
            </div>
        )
    }
}

export default RangeSlider;