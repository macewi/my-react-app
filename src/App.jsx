import {useState,useEffect} from "react" 



function App() {

  const[allQuestions,setAllQuestions] = useState()

 useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=4')
      .then((response) => response.json())
      .then((data) => {
        setAllQuestions(data.results)
        })
      .catch((error) => console.error('Error fetching trivia:', error))
      }, [])


  // const questionsArray = allQuestions.map(eachQuestion=>
  //   eachQuestion.question
  // )

  console.log(allQuestions)

  // console.log(questionsArray)

  const firstPage = <section className="main-page">
        <h1>Quizzical</h1>
        <p>Welcome to Quizzical!</p>
        <button onClick={handleClick}>Start quiz</button>
      </section>

  const secondPage = 
      <section className="quiz-page">
        <h1>Quizzical</h1>
        
        <div className="answers">
          <button onClick = {handleClick}>back to first page</button>
        </div>
      </section>

  const [isFirstPage, setIsFirstPage] = useState(true)

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