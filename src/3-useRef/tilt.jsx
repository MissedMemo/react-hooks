import React, { useState, useEffect } from 'react'

const Tilt = props => <div className='tiltRoot'>
  <div className='tiltChild'>
    { props.children }
  </div>
</div>

export default Tilt