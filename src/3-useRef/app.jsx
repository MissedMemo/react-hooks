/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { Fragment } from 'react'
import Tilt from './tilt'

const centered = css`
  display: grid;
  justify-content: center;
  align-items: center;
`

export default () => <div css={centered}>
  <Tilt>
    <div css={centered}>I'm Tilting...</div>
  </Tilt>
</div>