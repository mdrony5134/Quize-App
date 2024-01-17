import { useState } from "react"
import "./Questions.css"
import { Button } from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
const Questions = ({questions, score, options, currQues, correct, setOptions,setCurrQues, setScore , setQuestions}) => {
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSelect = (i) =>{
        if(selected === i && selected === correct){
            return "select"
        }else if(selected === i && selected !== correct){
            return "wrong"
        }else if(i === correct){
            return "select"
        }
    }

    const handleCheck = (i) =>{
        setSelected(i)
        if(i === correct) setScore(score + 1)
        setError(false)
    }

    const handleNext = () =>{
        if(currQues > 8){
            navigate("/result")
        }else if(selected){
            setCurrQues(currQues + 1)
            setSelected();
        }else{
            setError("Please select and option")
        }
    }

    const handleQuiet = () =>{
        setCurrQues(0);
        setQuestions();
    }

  return (
    <div className="question">
        <h1>Question - {currQues + 1}</h1>
        <div className="singleQuestion">
            <h2>{questions.results[currQues]?.question}</h2>
            <div className="options">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options.map((i)=>(
                <button
                key={i}
                onClick={()=>handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                disabled={selected}
                >{i}</button>
            ))}
            </div>
            <div className="controls">
                <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{width: 180}}
                onClick={()=>handleQuiet()}
                >Quit</Button>
                <Button
                variant="contained"
                color="primary"
                size="large"
                style={{width: 180}}
                onClick={handleNext}
                >Next Question</Button>
            </div>
        </div>
    </div>
  )
}

export default Questions