import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News   from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey="c7159207e3784bd6bf50faa2aa32828a";
  state={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (

      <div>
        <BrowserRouter>
 
          <Navbar />
          <LoadingBar
          height={2}
        color='#f11946'
        progress={this.state.progress}

      />
           <Routes>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}    key="Sports" pagesize={6} country="in" category="Sports"  />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="Entertainment" pagesize={6} country="in" category="Entertainment"/>}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}     key="Business" pagesize={6} country="in" category="Business" />}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}    key="Technology" pagesize={6} country="in" category="Technology"/>}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}     key="Health" pagesize={6} country="in" category="Health" />}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey}     key="Science" pagesize={6} country="in" category="Science" />}></Route>
            <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey}     key="General" pagesize={6} country="in" category="General" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


