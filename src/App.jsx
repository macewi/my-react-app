import {useState,useEffect} from "react" 



function App() {

  const[allQuestions,setAllQuestions] = useState([])
  const[recordAnswers,setrecordAnswers]= useState()

  const inputAnswerArray = []

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
// const answer  = ()=>


 const questions = allQuestions.map((item,index)=>{

          const randomIndex = Math.floor(Math.random() * (item.incorrect_answers.length + 1));
          !item.incorrect_answers.includes(item.correct_answer)&&item.incorrect_answers.splice(randomIndex, 0, item.correct_answer)
          const allAnswers = item.incorrect_answers



          return(
          <div  key = {index} className = "question-group">
            <p className = "question">{item.question}</p>
            <div className = "answers-row">
              {allAnswers.map((answerItem)=>
              <label key = {answerItem} className = "radio-btn">
                <input type = "radio"  name = {index} value = {answerItem}/>
                {answerItem}
                </label>
              
              )}
            </div>
            </div>
        )})


  // console.log(questionsArray)

  const firstPage = <section className="main-page">
        <h1>Quizzical</h1>
        <p>Welcome to Quizzical!</p>
        <button onClick={handleClick}>Start quiz</button>
      </section>

  const secondPage = 
      <section >
        <div className="quiz-page">{questions}</div>
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