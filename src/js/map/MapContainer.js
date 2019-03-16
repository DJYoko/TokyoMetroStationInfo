import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import _JSXStyle from "styled-jsx/style";
import css from "styled-jsx/css";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const _position = this.getInitialMapPosition();

    return (
      <Map center={_position} zoom={14} style={this.mayMapStyle()}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.stationMarkers(this.props.line.station_l)}
      </Map>
    );
  }

  mayMapStyle() {
    return { width: "100%", height: "600px" };
  }
  stationMarkers(stations) {
    return stations.map((station, index) => (
      <Marker key={index} position={[station.lat, station.lon]}>
        <Popup>{station.station_name}</Popup>
      </Marker>
    ));
  }

  getInitialMapPosition() {
    if (
      typeof this.props.line !== "object" ||
      typeof this.props.line.station_l !== "object" ||
      this.props.line.station_l.length === 0
    ) {
	  // defaut positions
      return this.props.position;
    }

    const stations = this.props.line.station_l;
    let sumLat = 0;
    let sumLon = 0;

    stations.forEach((station, index) => {
      sumLat = sumLat + station.lat;
      sumLon = sumLon + station.lon;
    });
    const avgLat = sumLat / stations.length;
    const avgLon = sumLon / stations.length;
    return [avgLat, avgLon];
  }
}

MapContainer.defaultProps = {
  line: null,
  position: [35.658034, 139.701636]
};

MapContainer.propTypes = {
  line: PropTypes.object,
  position: PropTypes.array
};
