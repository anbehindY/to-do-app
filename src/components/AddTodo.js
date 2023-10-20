import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'

export const AddTodo = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(value))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-gray-400 w-full p-2 rounded"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          Add Todo
        </button>
      </form>
    </div>
  )
}
