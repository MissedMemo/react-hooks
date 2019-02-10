/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { useToggle } from './custom-hooks'
import Tilt from './tilt'

const centered = css`
  display: grid;
  justify-content: center;
  align-items: center;
`

export default () => {

  const [ showTilt, setShowTilt ] = useToggle(false)

  return <div css={centered}>
    <label>
      show Tilt
      <input type='checkbox' checked={showTilt} onChange={ setShowTilt } />
    </label>
    {
      showTilt && <Tilt>
        <div css={centered}>I'm Tilting...</div>
      </Tilt>
    }
  </div>
}