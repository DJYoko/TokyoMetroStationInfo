import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import {StationContainer} from './StationContainer';

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
			<StationContainer stations={this.props.line.station_l}></StationContainer>
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
		border-radius: 20px;
		padding : 8px 10px;
		color: #262626;
	}
	.line-name {
		border-radius: 12px;
		line-height:24px;
		height: 24px;
		font-size: 12px;
		padding: 0 12px;
		background: #ffffff;
		display:inline-block;
	}
`