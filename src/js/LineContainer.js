import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from './line';

export class LineContainer extends Component {
  constructor(props){
    super(props);
	  console.log(this.props.line_codes);
  }

  componentWillMount(){
    // this.fetchResponse();
  }
  
  // リストの更新
  fetchResponse(){
    fetch('http://localhost:3001/todos')
    .then( res => res.json() )
    .then( res => {
      this.setState({
        todo : res
      });
    })
  }
  
  render() {
    return (
      <div>
		<Line line_cd={1}>LINE</Line>
		</div>
    );
  }
}
	 
LineContainer.defaultProps = {
	line_codes: [],
}	 
	 
LineContainer.propTypes = {
	line_codes: PropTypes.array,
}