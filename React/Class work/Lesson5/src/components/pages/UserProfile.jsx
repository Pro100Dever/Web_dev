import { useParams } from 'react-router-dom'

const users = [
  { id: 1, name: 'John Doe', age: 28, bio: 'Software Developer' },
  { id: 2, name: 'Jane Smith', age: 34, bio: 'Graphic Designer' },
  { id: 3, name: 'Bob Johnson', age: 45, bio: 'Project Manager' },
]

export default function UserProfile() {
  const params = useParams()
  const userId = params.id
  // console.log(typeof userId, typeof users[0].id)

  const userRes = users.find(a => a.id === +userId)
  return (
    <div>
      <h3>{userRes.name}</h3>
      <p>{userRes.age}</p>
      <p>{userRes.bio}</p>
    </div>
  )
}
