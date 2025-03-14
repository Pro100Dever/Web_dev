import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Question from './components/Question'
import Result from './components/Result'
import { updateScore } from './features/questionnaire/questionnaireSlice'

function App() {
  const dispatch = useDispatch()
  const { questions, result } = useSelector(state => state.questions)
  const [currentScore, setCurrentScore] = useState(result)

  // useEffect(() => {
  //   dispatch(updateScore(currentScore))
  // }, [currentScore])

  const handleSubmit = () => {
    if (currentScore != undefined) {
      dispatch(updateScore(currentScore))
    } else {
      dispatch(updateScore(0))
    }
  }

  return (
    <>
      <ul>
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            setCurrentScore={setCurrentScore}
          />
        ))}
      </ul>
      <Button className='submitBtn' variant='contained' onClick={handleSubmit}>
        Submit
      </Button>
      <Result />
    </>
  )
}

export default App
