import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import {  } from '@tanstack/react-query-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css'

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient} >
        <ReactQueryDevtools  />  {/* Enable DevTools in production */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:categoryName" element={<Home />} />
            <Route path="/as" element={<div>KENAN BALVAC</div>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
