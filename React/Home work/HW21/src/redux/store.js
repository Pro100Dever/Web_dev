import { configureStore } from '@reduxjs/toolkit'
import questionnaireSlice from '../features/questionnaire/questionnaireSlice'

const store = configureStore({
  reducer: {
    questions: questionnaireSlice,
  },
})

export default store
