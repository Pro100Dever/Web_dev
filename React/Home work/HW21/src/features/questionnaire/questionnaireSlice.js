import { createSlice } from '@reduxjs/toolkit'

const questionnaireSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: [
      {
        question: 'Question1?',
        answerVariants: ['Answer1', 'Answer2'],
        answer: 'Answer2',
      },
      {
        question: 'Question2?',
        answerVariants: ['Answer1', 'Answer2'],
        answer: 'Answer2',
      },
      {
        question: 'Question3?',
        answerVariants: ['Answer1', 'Answer2'],
        answer: 'Answer2',
      },
      {
        question: 'Question4?',
        answerVariants: ['Answer1', 'Answer2'],
        answer: 'Answer2',
      },
      {
        question: 'Question5?',
        answerVariants: ['Answer1', 'Answer2'],
        answer: 'Answer2',
      },
    ],
    result: null,
  },
  reducers: {
    updateScore: (state, action) => {
      state.result = action.payload
    },
  },
})
export const { updateScore } = questionnaireSlice.actions
export default questionnaireSlice.reducer
