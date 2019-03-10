import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { LineContainer } from "./LineContainer";
import { LineSelector } from "./LineSelector";
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
        <LineSelector
          lines={LINES}
          selectedLineCd={this.state.selectedLineCd}
          onChangeValue={this.onChangeValue}
        />
        <LineContainer
          lines={this.filterSelectedLine(this.state.selectedLineCd)}
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
