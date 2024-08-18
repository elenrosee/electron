import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Container } from './App.styled'
import { GlobalStyle } from './GlobalStyle'
import { ToDoForm, ToDoList } from './components'

const container = document.getElementById('root')

class AppError extends Error {
  code: string

  constructor(message: string, code: string) {
    super(message)
    this.code = code
  }
}

if (!container) {
  throw new AppError('root element not found', 'ERR_INTENTIONAL')
}
const root = createRoot(container)

root.render(
  <StrictMode>
    <GlobalStyle />
    <Container>
      <ToDoForm />
      <ToDoList />
    </Container>
  </StrictMode>
)
