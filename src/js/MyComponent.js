import React, { Component } from 'react';
import { MyH1 } from './MyH1';
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
console.log(LINE_CODES);

export class MyComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
				<MyH1 />
				<LineContainer lines={LINE_CODES} />
			</div>
   		 );
    }
}