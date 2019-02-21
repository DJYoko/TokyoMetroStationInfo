import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Line extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (      
		<div>this line_cd is {this.props.line_cd}</div>
    );
  }
}
	 
Line.defaultProps = {
	line_cd: 0,
}	 
	 
Line.propTypes = {
	line_cd: PropTypes.number
}