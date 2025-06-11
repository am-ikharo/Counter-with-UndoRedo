import React, { useState } from 'react'

const Counter = () => {
    const [history, setHistory] = useState([0])
    const [position, setPosition] = useState(0)

  return (
    <div className='flex pt-[150px] justify-center bg-gray-50'>
        <h1>Counter with Undo/Redo</h1>

    </div>
  )
}

export default Counter