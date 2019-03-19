import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Card } from '@material-ui/core';

const styleMap = {
    width: '100%',
    height: '40vh',
};
class MapView extends Component {
    state = {
        cntLat: 33.785,
        cntLng: -84.385,
        showPopUp: false,
    };



    render() {
        return (
            <Card>
                <Map
                    style={styleMap}
                    center={[this.state.cntLat, this.state.cntLng]}
                    zoom={14}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                </Map>
            </Card>

        );
    };
};

export default MapView;
