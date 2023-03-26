import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react'

export default function App() {
  const [progress, setProgress] = useState(0)
  function showProgress(progress) {
    setProgress(progress)
  }
  return (
    <> 
      <Router>
      <LoadingBar
        color='#f11946'
        height={3}
        Progress={progress}
      />
      <Navbar/>
      <Routes>
        <Route index element={<News showProgress={showProgress} key="world" heading="Top news" country='in' category='world' />} />
        <Route exact path="/entertainment" element={<News showProgress={showProgress} key="entertainment" heading="Top Entertainment news" country='in' category='entertainment' />} />
        <Route exact path="/food" element={<News showProgress={showProgress} key="food" heading="Top Food news" country='in' category='food' />} />
        <Route exact path="/health" element={<News showProgress={showProgress} key="health" heading="Top Health news" country='in' category='health' />} />
        <Route exact path="/science" element={<News showProgress={showProgress} key="science" heading="Top Science news" country='in' category='science' />} />
        <Route exact path="/sports" element={<News showProgress={showProgress} key="sports" heading="Top Sports news" country='in' category='sports' />} />
        <Route exact path="/technology" element={<News showProgress={showProgress} key="technology" heading="Top Technology news" country='in' category='technology' />} />
        <Route exact path="/business" element={<News showProgress={showProgress} key="business" heading="Top Business news" country='in' category='business' />} />
      </Routes>
    </Router>
    </>
  )
}
