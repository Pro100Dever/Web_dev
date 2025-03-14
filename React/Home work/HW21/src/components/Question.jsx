import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

export default function Question({ question, setCurrentScore }) {
  function handleChange(e) {
    e.target.value === question.answer
      ? setCurrentScore(prev => prev + 1)
      : setCurrentScore(prev => prev - 1)
  }
  return (
    <li>
      <h3>{question.question}</h3>
      <FormControl>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='radio-buttons-group'
          onChange={handleChange}
          defaultValue={question.answerVariants[0]}
        >
          {question.answerVariants.map((variant, index) => (
            <FormControlLabel
              key={index}
              value={variant}
              control={<Radio />}
              label={variant}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </li>
  )
}
