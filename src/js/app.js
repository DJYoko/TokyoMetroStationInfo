import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {LineContainer} from './LineContainer';
import {LineSelector} from './LineSelector';
import LINES from '../data/lines';

export class Container extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			selectedLineCd : LINES[1].line_cd,
		};
    }
    render() {
        return (
			<div>
				<LineSelector  lines = {LINES} selectedLineCd={this.state.selectedLineCd}/>
				<LineContainer lines = {LINES} selectedLineCd={this.state.selectedLineCd}/>
			</div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('app')
);