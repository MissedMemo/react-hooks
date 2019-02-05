import React, { Component } from 'react'

let timer = null
let timeStarted = null

class Stopwatch extends Component {
  state = {
    timeElapsed: 0,
    isRunning: false
  }

  toggleRunState = () => {
    const { isRunning } = this.state

    if ( isRunning ) {
      clearInterval(timer)
    } else {
      timeStarted = Date.now()
      timer = setInterval( () => {
        const timeElapsed = Date.now() - timeStarted
        this.setState({timeElapsed})
      }, 100 )
    }

    this.setState({isRunning: !isRunning})
  }

  render() {

    const btnText = this.state.isRunning ? "Stop" : "Start"
    const duration = `${this.state.timeElapsed}ms`

    return <div>
      <div>{ duration }</div>
      <button onClick={this.toggleRunState}>{ btnText }</button>
      <button>Reset</button>
    </div>
  }
}

export default Stopwatch