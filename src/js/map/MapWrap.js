import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const INIT_CENTER = {
  lat: 35.658034,
  lng: 139.701636,
};

export class MapWrap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapBound: [
        {
          lng: INIT_CENTER.lng - 0.1,
          lat: INIT_CENTER.lat - 0.1,
        },
        { lng: INIT_CENTER.lng + 0.1, lat: INIT_CENTER.lat + 0.1 },
      ],
    };
  }
  // , 139.701636

  render() {
    return (
      <MapContainer bounds={this.state.mapBound} style={this.mayMapStyle()}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        {this.stationMarkers(this.props.line.station_l)}
      </MapContainer>
    );
  }

  componentDidMount() {
    this.setMapBound();
  }

  componentDidUpdate() {
    this.setMapBound();
  }

  mayMapStyle() {
    return { width: '100%', height: '600px' };
  }
  stationMarkers(stations) {
    return stations.map((station, index) => (
      <Marker key={index} position={[station.lat, station.lon]}>
        <Popup>{station.station_name}</Popup>
      </Marker>
    ));
  }
  setMapBound() {
    if (!this.hasStations) {
      // default, no station data added.
      return false;
    }
    const stations = this.props.line.station_l;
    const _bound = {
      top: stations[0].lon,
      left: stations[0].lat,
      bottom: stations[0].lon,
      right: stations[0].lat,
    };

    stations.forEach((station, index) => {
      _bound.right = Math.max(_bound.right, station.lat);
      _bound.left = Math.min(_bound.left, station.lat);
      _bound.top = Math.max(_bound.top, station.lon);
      _bound.bottom = Math.min(_bound.bottom, station.lon);
    });

    this.state.mapBound[0].lat = _bound.left;
    this.state.mapBound[1].lat = _bound.right;
    this.state.mapBound[0].lat = _bound.left;
    this.state.mapBound[1].lat = _bound.right;
  }
  hasStations() {
    if (typeof this.props.line !== 'object' || typeof this.props.line.station_l !== 'object' || this.props.line.station_l.length === 0) {
      // default
      return false;
    }
    return true;
  }
}

MapWrap.defaultProps = {
  line: null,
  position: [35.658034, 139.701636],
};

MapWrap.propTypes = {
  line: PropTypes.object,
  position: PropTypes.array,
};
