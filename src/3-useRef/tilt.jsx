import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import styled from '@emotion/styled'

const TiltRoot = styled.div`
  height: 150px;
  background-color: red;
  width: 200px;
  background-image: linear-gradient(135deg, #ff00ba 0%, #fae713 100%);
  transform-style: preserve-3d;
  will-change: transform;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
`

const TiltChild = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translateZ(30px) translateX(-50%) translateY(-50%);
  box-shadow: 0 0 50px 0 rgba(51, 51, 51, 0.3);
  background-color: white;
`

const Tilt = props => {

  const tiltRef = useRef()
  
  useEffect(() => {
    VanillaTilt.init( tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })
    return () => tiltRef.current.vanillaTilt.destroy()
  }, [])

  return <TiltRoot ref={tiltRef}>
    <TiltChild>
      { props.children }
    </TiltChild>
  </TiltRoot>
}

export default Tilt