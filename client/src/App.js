import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import HeroCarousel from './components/HeroCarousel';
import Footer from './components/Footer';
import ClassPage from './pages/ClassPage';
import TeamPage from './pages/TeamPage';
import StudentPage from './pages/StudentPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
  <ApolloProvider client ={client}>
   <Router>
        <AppNavbar/>
        <HeroCarousel/>
        <Routes>
          <Route 
            path='/' 
            element={<ClassPage/>} 
          />
          <Route 
            path='/team' 
            element={<TeamPage/>} 
          />
            <Route 
            path='/student' 
            element={<StudentPage />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page! Try Again!</h1>}
          />
        </Routes>
        <Footer/>
    </Router>
    </ApolloProvider>
  );
}

export default App;