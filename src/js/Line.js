import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style'
import css from 'styled-jsx/css'

export class Line extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (      
		<div className="line" style={this.style()}>
			<div className="line-name">
				{this.props.line.line_name}
			</div>
			<style jsx>{styles}</style>
		</div>
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

const styles = css`
	.line {
		border-radius: 4px;
		padding : 8px;
		color: #262626;
	}
	.line-name {
		padding: 2px 4px;
		background: #ffffff;
		display:inline-block;
	}
`