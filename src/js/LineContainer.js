import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from './Line';
import LineColor from '../data/LineColor';

export class LineContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
      console.log('LineContainer render');
    return (
      <div>
        {this.renderLines()}
      </div>
    )
  }

  renderLines() {
      const rows = this.props.lines.map((line,index) =>
          <Line line={line} color={LineColor[line.line_cd]} key={index}></Line>
        );
      return rows;
  }
}

LineContainer.defaultProps = {
	lines: [],
}

LineContainer.propTypes = {
	lines: PropTypes.array,
}