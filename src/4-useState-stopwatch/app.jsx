/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Stopwatch1 from './stopwatch-class'
import Stopwatch2 from './stopwatch-hook'
import Stopwatch3 from './stopwatch-useInterval'

const app = css`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`

const wrapper = css`
  margin: 0 40px;
  label {
    display: block;
    margin-bottom: 24px;
  }
`

export default () => <div css={app}>
  <div css={wrapper}>
    <label>Class-based...</label>
    <Stopwatch1 />
  </div>
  <div css={wrapper}>
    <label>Hook-based...</label>
    <Stopwatch2 />
  </div>
  <div css={wrapper}>
    <label>useInterval...</label>
    <Stopwatch3 />
  </div>
</div>