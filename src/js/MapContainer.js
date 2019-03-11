import React, { Component } from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import _JSXStyle from "styled-jsx/style";
import css from "styled-jsx/css";
const position = [35.658034, 139.701636];

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <Map center={position} zoom={14} style={this.mayMapStyle()}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </Map>
      
    );
  }
	
	mayMapStyle() {
		return { width: "100%", height: "600px" }
	}
}