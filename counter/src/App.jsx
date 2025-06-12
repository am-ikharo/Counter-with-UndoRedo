import React from 'react'
import Counter from './assets/Counter'


const App = () => {
  return (
    <div className='min-h-screen bg-grey-50 dark:bg-gray-900 flex flex-col'>
      <header className='border-b py-4'>
        <div className=' container mx-auto px-4'>
          <h1 className='text-2xl font-bold'>
            React Project
          </h1>
        </div>

      </header>
      <main>
        <Counter/>
      </main>

    </div>
  )
}

export default App