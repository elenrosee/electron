import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import fs from 'fs'
import { ItemType } from './types/ItemType'

const DATA_FILE_PATH = path.join(__dirname, '../..', 'data', 'todos.json')

// Ensure 'data' directory and 'todos.json' file exist
const DATA_DIR = path.dirname(DATA_FILE_PATH)
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR)
}
if (!fs.existsSync(DATA_FILE_PATH)) {
  fs.writeFileSync(DATA_FILE_PATH, '[]', 'utf8')
}

const saveToDoItems = (items: ItemType[]) => {
  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(items, null, 2))
}

const loadToDoItems = (): ItemType[] => {
  if (fs.existsSync(DATA_FILE_PATH)) {
    const data = fs.readFileSync(DATA_FILE_PATH, 'utf-8')
    return JSON.parse(data)
  }
  return []
}

// IPC listener for adding a new to-do item
ipcMain.on('add-todo', (event, newItem: ItemType) => {
  const items = loadToDoItems()
  items.push(newItem)
  saveToDoItems(items)
  event.reply('todo-added', items) // Optional: Reply to the renderer with the updated items
})

// IPC listener for delete to-do item
ipcMain.on('delete-todo', (event, itemId: number) => {
  const items = loadToDoItems()
  const newTodosList = items.filter((todo) => todo.id !== itemId)

  saveToDoItems(newTodosList)
  event.reply('todo-added', newTodosList) // Optional: Reply to the renderer with the updated items
})

// IPC listener for change to-do item
ipcMain.on('change-todo', (event, newItem: ItemType) => {
  const items = loadToDoItems()
  const newTodosList = items.map((todo) =>
    todo.id === newItem.id
      ? { ...todo, checked: newItem.checked, id: Date.now() }
      : todo
  )

  saveToDoItems(newTodosList)
  event.reply('todo-added', newTodosList) // Optional: Reply to the renderer with the updated items
})

// IPC handler for gatting all todos
ipcMain.handle('get-todos', () => {
  return loadToDoItems()
})

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    )
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
