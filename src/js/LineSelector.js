import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';

export class LineSelector extends Component {
  constructor(props){
    super(props);
	this.state = {
		selectedLineCd : props.selectedLineCd,
	};
	  this.onChangeValue = this.onChangeValue.bind(this);
  }
  render() {
    return (   
		<div className="form-inline">
			<div className="form-group">
				<label>select line </label>
				<select className="form-control" value={this.state.selectedLineCd} onChange={this.onChangeValue}>
					{this.lineListOptions(this.props.lines)}
				</select>
			</div>
		</div>
    );
  }
  style() {
    return {
      'borderColor': this.props.color,		
    }
  }
  lineListOptions(lines) {
	  return lines.map((line,index) =>
			<option key={index} value={line.line_cd}>
				{line.line_name}
			</option>
		)
  }
  onChangeValue(event) {
	  const state = {
	  	selectedLineCd: parseInt(event.target.value)
	  };
	  this.setState(state);
	  this.props.onChangeValue(state);
  }
}

const styles = css`
	.line {
		border-style:solid;
		border-width:8px;
		border-radius: 20px;
		padding : 16px;
		color: #262626;
	}
	.line-name {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 12px;
	}
`