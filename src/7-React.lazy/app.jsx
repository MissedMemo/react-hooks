/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { lazy, Suspense } from 'react'
import { useToggle } from './custom-hooks'

const Tilt = lazy( () => import('./tilt') )

const centered = css`
  display: grid;
  justify-content: center;
  align-items: center;
`

export default () => {

  const [ showTilt, setShowTilt ] = useToggle(false)

  return <div css={centered}>
    <label>
      show tilt
      <input type='checkbox' checked={showTilt} onChange={ setShowTilt } />
    </label>
    {
      showTilt && <Suspense fallback={ <div>Loading...</div> }>
        <Tilt>
          <div css={centered}>I'm Tilting...</div>
        </Tilt>
      </Suspense>
    }
  </div>
}