import React from 'react';
import ReactDOM from 'react-dom';
import {LineContainer} from './LineContainer';
import {LineSelector} from './LineSelector';
import LINES from '../data/lines';

export class Container extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
			<div>
			<LineSelector lines = {LINES}/>
            <LineContainer lines = {LINES}/>
			</div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('app')
);