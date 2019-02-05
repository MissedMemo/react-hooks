/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { Component } from 'react'

const outputStyle = css`
  fontSize: 5em;
  display: block;
`

const buttonStyle = css`
  display: block;
  border: 1px solid #ccc;
  background: #fff;
  fontSize: 2em;
  padding: 15px;
  margin: 5px;
  width: 200px;
`

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

    return <div css={css`text-align: center;`}>
      <label css={outputStyle}>{ duration }</label>
      <button css={buttonStyle} onClick={this.toggleRunState}>{ btnText }</button>
      <button css={buttonStyle}>Reset</button>
    </div>
  }
}

export default Stopwatch