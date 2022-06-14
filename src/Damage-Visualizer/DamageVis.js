import './DamageVis.css';

import React from 'react';

class DamageVis extends React.Component {
    render() {
        return (
            <main>
                <div className='container'>
                    {this.props.children}
                </div>
            </main>
        )
    }
}

export default DamageVis;