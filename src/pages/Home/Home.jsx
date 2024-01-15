import React, { useState } from 'react'
import "./Home.css"
import { Button, MenuItem, TextField } from '@material-ui/core'
import Categories from '../../Data/Categories'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { useNavigate } from 'react-router-dom'

const Home = ({name, setName, fetchQuestions}) => {
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = () =>{
        if(!category || !difficulty || !name){
            setError(true)
        }else{
            setError(false)
            fetchQuestions(category, difficulty)
            navigate("/quiz")
        }
    }

  return (
    <div className='content'>
       <div className='setting'>
        <span style={{fontSize: 30, marginBottom: 10}}>Quiz Setting</span>

        {error && <ErrorMessage>Please fill the all fields</ErrorMessage>}

        <div className='setting_select'>
        <TextField
        label="Enter Your Name"
        variant='outlined'
        style={{marginBottom: 30}}
        onChange={(e)=> setName(e.target.value)}
        value={name}
        />

        <TextField
        select
        label="Quiz category"
        variant="outlined"
        style={{marginBottom: 30}}
        onChange={(e)=> setCategory(e.target.value)}
        value={category}
        >
            {
                Categories.map((cat)=>(
                    <MenuItem key={cat.value} value={cat.value}>{cat.category}</MenuItem>
                ))
            }
        </TextField>
        <TextField 
        select 
        label="Select Difficulty"
        variant='outlined'
        style={{marginBottom: 30}}
        onChange={(e)=> setDifficulty(e.target.value)}
        value={difficulty}
        >
            <MenuItem key={"easy"} value={"easy"}>Easy</MenuItem>
            <MenuItem key={"medium"} value={"medium"}>Medium</MenuItem>
            <MenuItem key={"hard"} value={"hard"}>Hard</MenuItem>
        </TextField>
        <Button 
        variant='contained'
         color='primary' 
         size='large'
         onClick={handleSubmit}
         >
            Start Quiz
        </Button>
        </div>
        </div> 
        <img className='banner' src="./quiz.svg" alt="quiz image" />
    </div>
  )
}

export default Home