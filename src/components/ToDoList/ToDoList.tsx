import { useState, useEffect } from 'react'
import { ItemType } from '../../types'
import { ToDoItem } from '../ToDoItem'
import {
  ItemsList,
  Title,
  Wrapper,
  ItemBoard,
  BoardTitle,
} from './ToDoList.styled'

export const ToDoList = () => {
  const [todos, setTodos] = useState<ItemType[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const items = await window.electron.getTodos()
      setTodos(items)
    }

    fetchTodos()
  }, [])

  useEffect(() => {
    window.electron.onTodoAdded((updatedTodos: ItemType[]) => {
      setTodos(updatedTodos)
    })
  }, [])

  const sortedTodos = (arr: ItemType[]) => {
    return arr.sort((a, b) => {
      if (a.id < b.id) {
        return 1
      } else if (a.id > b.id) {
        return -1
      } else return 0
    })
  }

  const checkedItems = todos.filter((i) => i.checked === true)

  const notCheckedItems = todos.filter((i) => i.checked === false)

  return (
    <Wrapper>
      {todos.length === 0 && <Title>You have not add any tasks yet! </Title>}

      {todos.length !== 0 && (
        <>
          <ItemBoard>
            <BoardTitle>Have To Do</BoardTitle>
            {notCheckedItems.length > 0 && (
              <ItemsList>
                {sortedTodos(notCheckedItems).map((item) => (
                  <ToDoItem key={item.id} item={item} />
                ))}
              </ItemsList>
            )}
          </ItemBoard>
          <ItemBoard>
            <BoardTitle>Already Done</BoardTitle>
            {checkedItems.length > 0 && (
              <ItemsList>
                {sortedTodos(checkedItems).map((item) => (
                  <ToDoItem key={item.id} item={item} />
                ))}
              </ItemsList>
            )}
          </ItemBoard>
        </>
      )}
    </Wrapper>
  )
}
