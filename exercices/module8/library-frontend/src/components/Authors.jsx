import { useState } from 'react'

import { useQuery, useMutation } from '@apollo/client'

import { ALL_AUTHORS, EDIT_AUTHOR } from '../graphql-querries'



const Authors = (props) => {

  const [name, setName] = useState('')
  const [birthyear, setBirthyear] = useState('')

  const result = useQuery(ALL_AUTHORS)
  const [editAuthor] = useMutation(EDIT_AUTHOR, { refetchQueries: [{ query: ALL_AUTHORS }] })

  if (!props.show) {
    return null
  }

  if (result.loading) {
    return <div>loading...</div>
  }

  const submit = async (event) => {
    event.preventDefault()
    editAuthor({ variables: { name, setBornTo: parseInt(birthyear) } })
    setName('')
    setBirthyear('')
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {result.data.allAuthors.map(a => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Set birthyear</h3>
      <form onSubmit={submit}>
        <div>name <input value={name} onChange={({ target }) => setName(target.value)} /></div>
        <div>born <input value={birthyear} onChange={({ target }) => setBirthyear(target.value)} /></div>
        <button type="submit">update author</button>
      </form>
    </div>
  )

}

export default Authors
