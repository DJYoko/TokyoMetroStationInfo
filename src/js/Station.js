import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';

export class Station extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (      
		<div className="station" style={this.style()}>
			<div className="station-name">
				{this.props.station.station_name}
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

const styles = css`
	.Station {
		border-radius: 20px;
		padding : 8px 10px;
		color: #262626;
	}
	.station-name {
		border-radius: 12px;
		line-height:24px;
		height: 24px;
		font-size: 12px;
		padding: 0 12px;
		background: #ffffff;
		display:lines-block;
	}
`