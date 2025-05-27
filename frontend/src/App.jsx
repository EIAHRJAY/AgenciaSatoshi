import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About_us from './pages/About_us';
import Pricing from './pages/Pricing';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import { useState } from 'react'
import './index.css'
import Blog from './pages/Blog';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/about_us' element={<About_us/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
