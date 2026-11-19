import {useState,useEffect} from "react" 
import clsx from "clsx"



function App() {

  const[allQuestions,setAllQuestions] = useState([])
  const[recordAnswers,setRecordAnswers]= useState([])

const reload=()=>{
allQuestions=[]
recordAnswers=[]
handleClick()

}


  const correctAnswersArray = allQuestions.map(item=>
    item.correct_answer
  )


function playersAnswers(formData){

            setRecordAnswers([
              
              formData.get(0),
            formData.get(1),
          formData.get(2),
          formData.get(3),])

          }

console.log(reload)
  

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
          
          
          // const wronglyAnswered = recordAnswers[index]!==item.correct_answer



          return(
          <div  key = {index} className = "question-group">
            <p className = "question">{item.question}</p>
            <div className = "answers-row">
              {allAnswers.map((answerItem)=>
                
              
              {
              const wronglyClicked = recordAnswers[index]===answerItem && answerItem!==item.correct_answer
              const correctlyClicked =  answerItem===item.correct_answer

              return(<label key = {answerItem} className = 
              {recordAnswers.length<1?
              "radio-btn":
              clsx("radio-btn-greyed",
                {
                  "radio-btn-correct":correctlyClicked,
                "radio-btn-wrong":wronglyClicked}
              )}>
                <input type = "radio"  name = {index} value = {answerItem}/>
                {answerItem}
                </label>)}
              
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
      <section className="quiz-page">
        <form action={playersAnswers}>
          <div className="question-set">{questions}</div>
        <button>Check Answers</button>
        </form>
        
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