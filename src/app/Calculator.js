import React from 'react';
import Display from '../components/Display';
import Buttons from '../components/Buttons';
import './style.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ""
    };
  }

  insertOnDisplay = e => {
    const { value } = e.target;

    if (!value) {
      return;
    }
    if (value === '=') {
      return false;
    }
    if (value === 'C') {
      return false;
    }
    if (value === '<') {
      return false;
    }
    if (isNaN(value) && isNaN(this.state.number[this.state.number.length - 1])) {
      this.setState({number: this.state.number});
    } else {
      this.setState({number: this.state.number + value});
    }
    if ((this.state.number[0] === '0') && (this.state.number[1] !== '.')) {
      this.setState({number: '0.'});
    }
  };

  equalNum =() => {
    // const num = this.state.number;

    if (isNaN(this.state.number[this.state.number.length - 1])) {
      this.setState({number: this.state.number});
    } else {
      this.setState({number: eval(this.state.number)});
    }

    // if(num){
    //   this.setState({
    //     number: eval(num)
    //   });
    // }
  };

  backNum = () => {
    const num = this.state.number;
    this.setState({
      number: num.substring(0, num.length - 1)
    })
  };

  cleanDisplay = () => {
    this.setState({
      number: ""
    })
  };

  render() {
    return (
      <div className="container">
        <Display value={this.state.number} />
        <Buttons insertOnDisplay={this.insertOnDisplay} cleanDisplay={this.cleanDisplay} equalNum={this.equalNum} backNum={this.backNum} />
      </div>
    );
  }
}

export default Calculator;
