import React, { useState } from 'react'



const Counter = () => {
    const [history, setHistory] = useState([0])
    const [position, setPosition] = useState(0)

    const currentValue = history[position]

    const addValueToHistory = (newValue) => {

        const newHistory = history.slice(0, position + 1)
        setHistory([...newHistory, newValue])
        setPosition(position + 1)
    }
    const decrement = () => addValueToHistory(currentValue -1)
    const increment = () => addValueToHistory(currentValue +1)

    const undo = () => {
        if(position>0){
            setPosition(position - 1);
        }
    }
    const redo = ()=> {
        if(position < history.length-1){
            setPosition(position + 1);
        }
    }

  return (
    <div className='mx-100 flex flex-col pt-[150px] justify-center bg-gray-50'>
        <h1>Counter with Undo/Redo</h1>
        <div className='flex flex-col justify-center gap-4 flex mt-15'>
            <div className='flex justify-center item-center'>
                <div className='text-7xl font-bold tabular-nums'>{currentValue}</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <button onClick={decrement}>
                    <i className="h-4 w-4">-</i>
                </button>
                <button onClick={increment}>
                    <i className='h-4 w-4'>+</i>
                </button>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <button disabled={position===0}onClick={undo} variant={'secondary'} >
                    <i className="h-4 w-4">Undo</i>
                </button>
                <div className='text-sm text-muted-foreground'>
                    {position + 1} / {history.length}
                </div>
                <button disabled={position === history.length-1} onClick={redo} variant={'secondary'}>
                    <i className='h-4 w-4'>Redo</i>
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Counter