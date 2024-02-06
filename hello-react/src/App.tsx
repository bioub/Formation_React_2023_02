import { useState, MouseEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock'
import Select from './Select'

function App() {
  console.log('App renders');
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('Green');


  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setCount((count) => count + event.clientY)
  }

  return (
    <>
      <div className="menu">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Clock />
        <Select items={['Red', 'Blue', 'Green']} value={color} onValueChange={(newItem) => setColor(newItem)}  />
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR !!!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
