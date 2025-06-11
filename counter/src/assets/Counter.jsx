import React, { useState } from 'react'



const Counter = () => {
    const [history, setHistory] = useState([0])
    const [position, setPosition] = useState(0)

    const currentValue = history[position]

  return (
    <div className='flex pt-[150px] justify-center bg-gray-50'>
        <h1>Counter with Undo/Redo</h1>
        <div className='justify-center gap-4 flex mt-5'>
            <div className='flex justify-center item-center'>
                <div className='text-7xl font-bold tabular-nums'>{currentValue}</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <button className="h-4 w-4">
                <i >-</i>
            </button>
            <button className='h-4 w-4'>
                <i >+</i>
            </button>
            </div>
            <div>
                <button className="h-4 w-4">undo</button>
            </div>
            
        </div>
    </div>
  )
}

export default Counter