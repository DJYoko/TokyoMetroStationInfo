import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Line extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (      
		<div style={this.style()}>this line name is {this.props.line.line_name}</div>
    );
  }
  style() {
    return {
      'background': this.props.color,
    }
  }
}

Line.defaultProps = {
	color: '#ffffff',
}

Line.propTypes = {
	color: PropTypes.string
}