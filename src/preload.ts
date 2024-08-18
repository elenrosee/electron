// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'
import { ItemType } from './types'

contextBridge.exposeInMainWorld('electron', {
  addTodo: (newItem: ItemType) => ipcRenderer.send('add-todo', newItem),
  changeTodo: (newItem: ItemType) => ipcRenderer.send('change-todo', newItem),
  deleteTodo: (itemId: number) => ipcRenderer.send('delete-todo', itemId),
  onTodoAdded: (callback: (items: ItemType[]) => void) => {
    ipcRenderer.on('todo-added', (event, items) => callback(items))
  },
  getTodos: () => ipcRenderer.invoke('get-todos'),
})
