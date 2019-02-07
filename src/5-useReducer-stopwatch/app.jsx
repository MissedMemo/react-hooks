/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Stopwatch1 from './stopwatch-full'
import Stopwatch2 from './stopwatch-simplified'
import DifferenceCounter from './stopwatch-hook-client'

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
    <label>Full Reducer...</label>
    <Stopwatch1 />
  </div>
  <div css={wrapper}>
    <label>Simplified...</label>
    <Stopwatch2 />
  </div>
  <div css={wrapper}>
    <label>Shared Custom Hook...</label>
    <DifferenceCounter />
  </div>
</div>