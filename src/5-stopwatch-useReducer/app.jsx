/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Stopwatch from './stopwatch'

const app = css`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`

export default () => <div css={app}>
  <Stopwatch />
</div>