import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

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
    <h1>hello from react</h1>
  </StrictMode>
)
