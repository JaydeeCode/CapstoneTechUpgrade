import './App.css'
import { LoginForm } from './components/login-form'

function App() {
  return (
      <div className="box-border flex min-h-screen w-full flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm />
        </div>
      </div>
  )
} 

export default App
