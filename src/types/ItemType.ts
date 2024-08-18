export interface ItemType {
  id: number
  name: string
  checked: boolean
}

declare global {
  interface Window {
    electron: {
      addTodo: (newItem: ItemType) => void
      changeTodo: (newItem: ItemType) => void
      deleteTodo: (itemId: number) => void
      onTodoAdded: (callback: (items: ItemType[]) => void) => void
      getTodos: () => Promise<ItemType[]>
    }
  }
}
