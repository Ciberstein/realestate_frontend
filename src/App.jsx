import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage/HomePage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
