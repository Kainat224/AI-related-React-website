import React from 'react'
// import Article from './components/Article/Article';
// import { Article, Brand, CTA, Feature, Navbar } from './components'
import { Article, Header, Footer, Blog, Posibility,Features,Future, Whatgpt3 } from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css'

const App = () => {
  return (
    <div>
      <div className='App'>
      <div className='gradient__bg'>
          <Navbar />
          <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Future/>   
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
    </div>
  )
}

export default App