import React, { Component } from "react";
import PropTypes from "prop-types";
import _JSXStyle from "styled-jsx/style";
import css from "styled-jsx/css";
import { StationContainer } from "./StationContainer";

export class Line extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="line" style={this.style()}>
        <div className="line-name">{this.props.line.line_name}</div>
        <StationContainer stations={this.props.line.station_l} />
        <style jsx>{styles}</style>
      </div>
    );
  }
  style() {
    return {
      borderColor: this.props.color
    };
  }
}

Line.defaultProps = {
  color: "#ffffff"
};

Line.propTypes = {
  color: PropTypes.string
};

const styles = css`
  .line {
    border-style: solid;
    border-width: 8px;
    border-radius: 20px;
    padding: 16px;
    color: #262626;
  }
  .line-name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
  }
`;
