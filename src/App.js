import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App=(props)=> {
  const apiKey =process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(10);
    return (
      <div>
        
      <Router>
      <LoadingBar key="topload"
        color='#f11946'
        progress={progress}
      />
      <Navbar/>
      <Routes>
          <Route exact path="/"element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={5} country="in" category="general"/>}></Route>
          <Route exact path="/business"element={<News   key="business" setProgress={ setProgress} apiKey={ apiKey}pageSize={5} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment"element={<News setProgress={ setProgress} apiKey={ apiKey} key="entertainment" pageSize={5} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general"element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={5} country="in" category="general"/>}></Route>
          <Route exact path="/health"element={<News setProgress={ setProgress} apiKey={ apiKey} key="health" pageSize={5} country="in" category="health"/>}></Route>
          <Route exact path="/science"element={<News setProgress={ setProgress} apiKey={ apiKey} key="science" pageSize={5} country="in" category="science"/>}></Route>
          <Route exact path="/sports"element={<News setProgress={ setProgress} apiKey={ apiKey} key="sports" pageSize={5} country="in" category="sports"/>}></Route>
        </Routes>
      </Router>
      </div>
    )
}

export default App