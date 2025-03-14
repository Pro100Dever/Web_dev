import { useSelector } from 'react-redux'

export default function Result() {
  const { result } = useSelector(state => state.questions)

  return <>{result !== null && <h3>Your Score: {result}</h3>}</>
}
