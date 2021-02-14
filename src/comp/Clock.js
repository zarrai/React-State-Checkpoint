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
            {/* <div>{this.state.elapsedTime} seconds</div> */}
            <h4>{new Date(this.state.elapsedTime * 1000).toISOString().substr(11, 8)}</h4>
          </div>
        );
      }
    }

  export default Clock