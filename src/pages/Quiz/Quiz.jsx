import { CircularProgress } from '@material-ui/core';
import  { useEffect, useState } from 'react'
import "./Quiz.css"

const Quiz = ({name, questions, score, setScore, setQuestions}) => {

  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    if (questions && questions.results && questions.results[currQues]) {
      const currentQuestion = questions.results[currQues];
      setOptions(
        handleShuffle([
          currentQuestion.correct_answer,
          ...currentQuestion.incorrect_answers,
        ])
      );
    }
  }, [questions, currQues]);

  // console.log(questions);


  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  // console.log(options);

  

  return (
    <div className='quiz'>
       <span className='subtitle'>Welcome , {name}</span>
       {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions.results[currQues].category}</span>
            <span>
              Score : {score}
            </span>
          </div>
        </>
       ) : (
        <CircularProgress
         style={{margin: 100}}
         color='inherit'
         size={150}
         thickness={1}
         />
       )}
    </div>
  )
}

export default Quiz