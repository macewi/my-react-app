import {useState,useEffect} from "react" 



function App() {

  const[allQuestions,setAllQuestions] = useState([])

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

 const questions = allQuestions.map((item,index)=>(
          
          <div className = "question" key = {index}>
            <p>{item.question}</p>
            <p>{item.correct_answer}</p>
            </div>
          
        ))


  // console.log(questionsArray)

  const firstPage = <section className="main-page">
        <h1>Quizzical</h1>
        <p>Welcome to Quizzical!</p>
        <button onClick={handleClick}>Start quiz</button>
      </section>

  const secondPage = 
      <section className="quiz-page">
        <div>{questions}</div>
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