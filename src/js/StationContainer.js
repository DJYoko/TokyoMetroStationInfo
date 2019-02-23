import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import {Station} from './Station';

export class StationContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="station_container">
        {this.props.stations.map((station,index) =>
			<div className={'station_outer' + (index === this.props.stations.length - 1 ? ' last' : '')} key={index}>
				<Station station={station}></Station>
			</div>
        )}
		<style jsx>{styles}</style>
      </div>
    )
  }

  renderStations() {      
      return rows;
  }
	
}

StationContainer.defaultProps = {
	stations: [],
}

StationContainer.propTypes = {
	stations: PropTypes.array,
}

const styles = css`
	.station_container {
		background: #ffffff;
border-radius: 20px;
	}
	.station_outer {
		display:inline-block;
		position:relative;
		margin-right: 20px;
	}
	.station_outer:after {
		content:'.';
		position:absolute;
		text-indent:-9999px;
		top:50%;
		right:-15px;
		height:2px;
		width:10px;
		background:#262626;
		display:block;
		margin-top:-1px;
	}
`