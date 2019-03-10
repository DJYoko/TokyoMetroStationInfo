import React, { Component } from "react";
import PropTypes from "prop-types";
import _JSXStyle from "styled-jsx/style";
import css from "styled-jsx/css";
import { Line } from "./Line";
import LineColor from "../data/LineColor";

export class LineContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="line_container">
        {this.props.lines.map((line, index) => (
          <div className="line_outer" key={index}>
            <Line line={line} color={LineColor[line.line_cd]} />
          </div>
        ))}
        <style jsx>{styles}</style>;
      </div>
    );
  }

  renderLines() {
    return rows;
  }
}

LineContainer.defaultProps = {
  lines: []
};

LineContainer.propTypes = {
  lines: PropTypes.array
};

const styles = css`
  .line_container {
  }
  .line_outer {
    margin-bottom: 12px;
  }
`;
