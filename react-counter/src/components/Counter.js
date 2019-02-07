import React, {Component} from 'react';
import Plus from './Plus';
import Minus from './Minus';
import Refresh from './Refresh';
import Display from './Display';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    let {count} = this.state;
    return (
      <div className='main'>
        <div className='display-wrapper'>
          <Display count={count}/>
        </div>
        <div className='buttons-wrapper'>
          <Plus onCountUp={() => {this.setState({ count: count + 1 })}}/>
          <Refresh reload={() => {this.setState({ count: count = 0})}}/>
          <Minus onCountDown={() => {this.setState({ count: count - 1 })}}/>
        </div>
      </div>
    )
  };
}

export default Counter;
