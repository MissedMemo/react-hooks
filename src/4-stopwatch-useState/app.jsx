/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Stopwatch1 from './stopwatch-legacy'
import Stopwatch2 from './stopwatch'

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
</div>