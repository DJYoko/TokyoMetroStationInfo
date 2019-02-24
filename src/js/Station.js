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
		<div className={"station" + (this.props.is_last ? ' last' : '')} style={this.style()}>
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

Station.defaultProps = {
	is_last: false,
}

Station.propTypes = {
	is_last: PropTypes.bool,
}

const styles = css`
	.station {
		color: #262626;
	}
	.station:after {
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
	.station.last:after {
		content:'';
		display:none;
	}
`