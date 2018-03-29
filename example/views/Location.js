import React, { Component } from 'react';
import { Point } from '../../src';
class Location extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="location">
                <Point mapDOMId="our-address" centerPoint={{ lng: 113.952682, lat: 22.553414 }} />
            </div>
        );
    }
};
export default Location;