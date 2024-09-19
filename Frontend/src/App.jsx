import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceManagement from './component/ServiceManagement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ServiceManagement/>
    </>
  )
}

export default App
