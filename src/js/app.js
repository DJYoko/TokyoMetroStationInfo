import React from 'react';
import ReactDOM from 'react-dom';
import { LineContainer } from './LineContainer';
  
const LINE_CODES = [
	'l11302',
	'l28001',
	'l28002',
	'l28003',
	'l28004',
	'l28005',
	'l28006',
	'l28008',
	'l28009',
	'l28010',
];

export class Container extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
				<LineContainer line_codes={LINE_CODES} />
			</div>
   		 );
    }
}

ReactDOM.render(
  <Container />,
  document.getElementById('app')
);