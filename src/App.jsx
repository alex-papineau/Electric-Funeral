import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {

  return (
    <>
      <div className="bg-black h-screen w-screen m-0">
        <div className="flex items-center justify-center h-96">
          <img draggable="false" src="https://upload.wikimedia.org/wikipedia/en/4/48/Vaudevillevillain.jpg" className="object-center" alt="" />
        </div>
        <code className='bg-gray-700 rounded-xl w-full text-center px-24 py-4'>Testing ENV</code>
      </div>
    </>
  )
}

export default App
