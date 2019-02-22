import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Line extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (      
		<div style={this.style()}>
			<span>
				{this.props.line.line_name}
			</span>			
		</div>
    );
  }
  style() {
    return {
      'background': this.props.color,
		'padding' : '12px',
		'marginBottom': '12px',
		'color': '#ffffff',
    }
  }
}

Line.defaultProps = {
	color: '#ffffff',
}

Line.propTypes = {
	color: PropTypes.string
}