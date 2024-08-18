import { FC } from 'react'
import { SvgCheckMark, SvgTrashBin } from '../../icons'
import { BtnChecked, DeleteBtn, Item, ToDoName } from './ToDoItem.styled'
import { ItemType } from '../../types'

interface ToDoItemProps {
  item: ItemType
}

export const ToDoItem: FC<ToDoItemProps> = ({ item }) => {
  const deleteToDo = (item: ItemType) => {
    window.electron.deleteTodo(item.id)
  }

  const changeToDo = (item: ItemType) => {
    const isChecked = item.checked === true ? false : true

    window.electron.changeTodo({ ...item, checked: isChecked })
  }

  return (
    <Item key={item.id}>
      <BtnChecked
        onClick={() => changeToDo(item)}
        className={item.checked ? 'checked' : ''}
      >
        <SvgCheckMark fill={item.checked ? 'white' : ''} />
      </BtnChecked>
      <ToDoName className={item.checked ? 'checked' : ''}>{item.name}</ToDoName>
      <DeleteBtn onClick={() => deleteToDo(item)} type="submit">
        <SvgTrashBin />
      </DeleteBtn>
    </Item>
  )
}
