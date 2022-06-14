import React from 'react';

class DamageVis extends React.Component {
    render() {
        return (
            <main>
                <h1>Damage Visualizer</h1>
                {this.props.children}
            </main>
        )
    }
}

export default DamageVis;