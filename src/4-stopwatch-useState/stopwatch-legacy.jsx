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

    return <div style={{textAlign: 'center'}}>
      <label style={labelStyle}>{ duration }</label>
      <button style={buttonStyle} onClick={this.toggleRunState}>{ btnText }</button>
      <button style={buttonStyle}>Reset</button>
    </div>
  }
}


const buttonStyle = {
  display: 'block',
  border: '1px solid #ccc',
  background: '#fff',
  fontSize: '2em',
  padding: 15,
  margin: 5,
  width: 200,
}

const labelStyle = {
  fontSize: '5em',
  display: 'block',
}

export default Stopwatch