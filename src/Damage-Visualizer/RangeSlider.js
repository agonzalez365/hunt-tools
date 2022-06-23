import './RangeSlider.css';
import 'rc-slider/assets/index.css'

import React from 'react';
import Slider from 'rc-slider';

class RangeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    render() {
        return (
            <div className='rangeSliderContainer'>
                <span className='sliderStat'>{this.props.stat}</span>
                <span className='sliderVal' style={{ marginLeft: '0.5rem' }}>{this.state.value} {this.props.append}</span>
                <Slider min={0} max={300} step={1} draggableTrack={true} value={this.state.value} onChange={ (value) => { this.setState({ value }); this.props.onRangeUpdate(value);}}
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