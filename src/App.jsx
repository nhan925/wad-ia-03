import { SumCalculator } from './components/SumCalculator.jsx'
import './App.css'
import { ThemeToggle } from '@/components/ThemeToggle.jsx'

function App() {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <SumCalculator />
    </>
  )
}

export default App