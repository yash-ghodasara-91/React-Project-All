import { useState } from 'react'
import TaskManejar from './component/TaskManejar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskManejar />
    </>
  )
}

export default App
