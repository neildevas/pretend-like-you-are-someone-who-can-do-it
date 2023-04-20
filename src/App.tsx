import { useState } from 'react'
import './App.css'

const quotes = [{ quote: "Pretend like you are someone who can do it.", author: "Neil Gaiman" }];

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const quote = quotes[quoteIndex];
  return (
    <div className="App">
      <div className="card">
        <p>
          {quote.quote}
        </p>
        <p>
          - {quote.author}
        </p>
      </div>
    </div>
  )
}

export default App
