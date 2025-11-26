import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

function App() {

  return (
    <div classsName="relative w-full h-full">    
      <div className="absolute inset-0 z-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125_at_50%_10%,#000_60%,#00ff9d40_100%)]"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={ <NoteDetailPage /> } />
      </Routes>
    </div>
  )
}

export default App
