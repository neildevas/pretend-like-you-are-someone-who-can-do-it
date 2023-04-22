import './App.css'

const quotes = [{
  quote: "Pretend like you are someone who can do it", author: "Neil Gaiman",
}, {
  quote: "Pessimism is an indulgence, orthodoxy is the enemy of invention, despair an insult to the imagination",
  author: "Wade Davis"
}, {
  quote: "When I let go of what I am, I become what I might be",
  author: "Lao Tzu"
}, {
  quote: "Often when you think you're at the end of something, you're at the beginning of something else",
  author: "Fred Rogers"
}, {
  quote: "Anything worth doing is worth doing slowly",
  author: "Mae West"
}, {
  quote: "Hard choices, easy life. Easy choices, hard life.", author: "Jerzy Gregorek"
}];

function App() {
  return (
    <div className="App">
      {quotes.map(({ quote, author }, index) => (
        <div className={"card"} key={index}>
          <p>
            {quote}
          </p>
          <p>
            - {author}
          </p>
        </div>
      ))}
    </div>
  )
}

export default App
