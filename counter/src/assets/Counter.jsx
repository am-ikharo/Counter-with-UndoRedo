import React, { useState } from 'react'



const Counter = () => {
    const [history, setHistory] = useState([0])
    const [position, setPosition] = useState(0)

    const currentValue = history[position]

  return (
    <div className='flex flex-col pt-[150px] justify-center bg-gray-50'>
        <h1>Counter with Undo/Redo</h1>
        <div className='flex flex-col justify-center gap-4 flex mt-15'>
            <div className='flex justify-center item-center'>
                <div className='text-7xl font-bold tabular-nums'>{currentValue}</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <button >
                    <i className="h-4 w-4">-</i>
                </button>
                <button>
                    <i className='h-4 w-4'>+</i>
                </button>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <button>
                    <i className="h-4 w-4">Undo</i>
                </button>
                <div className='text-sm text-muted-foreground'>
                    {position + 1} / {history.length}
                </div>
                <button>
                    <i className='h-4 w-4'>Redo</i>
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Counter