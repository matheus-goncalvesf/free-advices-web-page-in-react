import { useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState("")

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div className="container">
     <h1 className="header">ADVICE FOR YOU</h1>
     <h2 className="advice">{advice}</h2>
     
     <button className="button" onClick={getAdvice}>Get Free Advice</button>
    </div>
  )
}

export default App
