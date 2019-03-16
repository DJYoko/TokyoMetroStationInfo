import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import _JSXStyle from "styled-jsx/style";
import css from "styled-jsx/css";
import { LineContainer } from "./info/LineContainer";
import { LineSelector } from "./LineSelector";
import { MapContainer } from "./map/MapContainer";
import LINES from "../data/lines";

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLineCd: LINES[1].line_cd
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  render() {
    return (
      <div>
        <div style={{ marginBottom: "12px" }}>
          <LineSelector
            lines={LINES}
            selectedLineCd={this.state.selectedLineCd}
            onChangeValue={this.onChangeValue}
          />
        </div>
        <LineContainer
          lines={this.filterSelectedLine(this.state.selectedLineCd)}
        />
        <MapContainer
          line={this.filterSelectedLine(this.state.selectedLineCd)[0]}
        />
      </div>
    );
  }
  filterSelectedLine(selectedLineCd) {
    return LINES.filter((LINE, index) => {
      return LINE.line_cd === this.state.selectedLineCd;
    });
  }
  onChangeValue(state) {
    this.setState(state);
  }
}
ReactDOM.render(<Container />, document.getElementById("app"));
