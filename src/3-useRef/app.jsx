/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import Tilt from './tilt'

const centered = css`
  background-color: lightgreen;
  padding: 16px;
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
`

export default () => <div css={centered}>
  <Tilt>
    <div css={centered}>I'm Tilting...</div>
  </Tilt>
</div>