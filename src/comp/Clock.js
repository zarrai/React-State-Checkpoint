import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          elapsedTime: null
        };
    
        this.countUp = this.countUp.bind(this);
        this.startCounting = this.startCounting.bind(this);
      }
    
      startCounting() {
        setInterval(this.countUp, 1000);
      }
    
      countUp() {
        this.setState(({ elapsedTime }) => ({ elapsedTime: elapsedTime + 1 }));
      }
      
      componentDidMount() {
          this.startCounting()
      }

      render() {
        return (
          <div>
            <div>{this.state.elapsedTime} seconds</div>
          </div>
        );
      }
    }

  export default Clock