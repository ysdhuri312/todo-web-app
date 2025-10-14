/** @format */

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from '../pages/Home';
import Archives from '../pages/Archives';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/archives' element={<Archives />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
