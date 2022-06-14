import React from 'react';

class LoadoutMain extends React.Component {
    render() {
        return (
            <main>
                <h1>Loadout Randomizer</h1>
                {this.props.children}
            </main>
        )
    }
}

export default LoadoutMain;