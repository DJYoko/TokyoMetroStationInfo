import React from 'react';
import ReactDOM from 'react-dom';
import {LineContainer} from './LineContainer';
import LINES from '../data/lines';

export class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LineContainer lines = {LINES}/>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('app')
);