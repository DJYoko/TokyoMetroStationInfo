import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export class MapWrap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MapContainer center={this.props.position} zoom='14' style={this.mayMapStyle()} ref='mapRef'>
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

    // this.mapRef.leafletElement.fitBounds(
    //   [
    //     [_bound.left, _bound.bottom],
    //     [_bound.right, _bound.top],
    //   ],
    //   {
    //     padding: [20, 20],
    //   }
    // );
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
