import { useState, FormEvent } from 'react'
import { AddToDoForm, Btn, Title, Wrapper } from './ToDoForm.styled'
import { SvgPlus } from '../../icons'
import { ItemType } from '../../types'

export const ToDoForm = () => {
  const [name, setName] = useState<string>('')

  const handleChange = (event: FormEvent) => {
    const { value } = event.target as HTMLInputElement
    setName(value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const newItem: ItemType = {
      id: Date.now(),
      name,
      checked: false,
    }

    window.electron.addTodo(newItem) // Send the new item to the main process
    setName('')
  }

  return (
    <Wrapper>
      <Title>To Do List</Title>
      <AddToDoForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Add new task to do"
          required
        />
        <Btn type="submit">
          <SvgPlus />
        </Btn>
      </AddToDoForm>
    </Wrapper>
  )
}
