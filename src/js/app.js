import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { LineContainer } from './LineContainer';
  
const LINE_CODES = [
	11302,
	28001,
	28002,
	28003,
	28004,
	28005,
	28006,
	28008,
	28009,
	28010,
];

export class Container extends React.Component {
    constructor(props){
        super(props);
    }
	
	componentWillMount(){
		this.fetchResponse();
	}

	// リストの更新
	fetchResponse(){
		LINE_CODES.forEach((line_cd)=>{
			//  http://www.ekidata.jp/api/l/11302.json
			const url = 'http://www.ekidata.jp/api/l/' + line_cd + '.json';
			fetch(url)
			.then( res => res.json() )
			.then( res => {

				lines[line_cd] = res;
			});
		});
		
	}
	
    render() {
        return (
            <div>
				<LineContainer line_codes={LINE_CODES} />
			</div>
   		 );
    }
}

Container.defaultProps = {
	lines: [],
}	 
	 
Container.propTypes = {
	lines: PropTypes.array,
}

ReactDOM.render(
  <Container />,
  document.getElementById('app')
);