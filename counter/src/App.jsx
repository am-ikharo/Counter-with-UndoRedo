import React from 'react'
import Counter from './assets/Counter'


const App = () => {
  return (
    <div className='justify-center min-h-screen bg-grey-50 dark:bg-gray-900 flex flex-col'>
      <header className='justify-center border-b py-4'>
        <div className='justify-center container mx-auto px-4'>
        </div>

      </header>
      <main>
        <Counter/>
      </main>

    </div>
  )
}

export default App