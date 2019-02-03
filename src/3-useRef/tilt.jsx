import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const TiltChild = styled.div`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const Tilt = props => <div className='tiltRoot'>
  <TiltChild>
    { props.children }
  </TiltChild>
</div>

export default Tilt