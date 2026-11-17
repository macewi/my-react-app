import React from "react" 



function App() {



  const firstPage = <section className="main-page">
        <h1>Quizzical</h1>
        <p>Welcome to Quizzical!</p>
        <button onClick={handleClick}>Start quiz</button>
      </section>

  const secondPage = <section className="quiz-page">
        <h1>Quizzical</h1>
        <p>Question 1</p>
        <div className="answers">
          <button>Answer 1</button>
          <button>Answer 2</button>
          <button>Answer 3</button>
          <button onClick = {handleClick}>Answer 4</button>
        </div>
      </section>

  const [isFirstPage, setIsFirstPage] = React.useState(true)

  function handleClick() {
    setIsFirstPage(prevState => !prevState)
  }



  return (
    <main>
      {isFirstPage ? firstPage : secondPage}
    </main>
  )
}

export default App