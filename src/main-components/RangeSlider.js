import './RangeSlider.css';
import 'rc-slider/assets/index.css'

import React from 'react';
import Slider from 'rc-slider';

class RangeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 20
        };
    }

    render() {
        return (
            <div className='rangeSliderContainer'>
                <span className='sliderStat'>{this.props.stat}</span>
                <span className='sliderVal'>{this.state.value}</span>
                <Slider min={0} max={500} step={1} draggableTrack={true} defaultValue={this.state.value} onChange={(value) => { this.setState({ value }) }}
                    trackStyle={{
                        backgroundColor: '#faefed',
                        height: '11px',
                        borderRadius: '0.1rem'
                    }}
                    railStyle={{
                        height: '11px',
                        borderRadius: '0.1rem',
                        backgroundColor: '#070d13'
                    }}
                    handleStyle={{
                        height: '22px',
                        width: '5px',
                        opacity: '1',
                        border: 'none',
                        borderRadius: '0.1rem',
                        color: 'red',
                    }}
                />
            </div>
        )
    }
}

export default RangeSlider;