/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Stopwatch1 from './stopwatch-legacy'
import Stopwatch2 from './stopwatch'

const app = css`
  display: flex;
  justify-content: center;
`

const wrapper = css`
  margin: 20px;
  span {
    display: block;
    margin-bottom: 20px;
  }
`

export default () => <div css={app}>
  <div css={wrapper}>
    <span>Class-based...</span>
    <Stopwatch1 />
  </div>
  <div css={wrapper}>
    <span>Hook-based...</span>
    <Stopwatch2 />
  </div>
</div>