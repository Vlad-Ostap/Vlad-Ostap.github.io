import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ProjectPage from './components/ProjectPage/ProjectPage';
import Contacts from './components/Contacts/Contacts';
import './App.css';

function App() {

  return (
    <HashRouter basename='/'>
      <div className='app'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route index element={<Home />} />
            <Route path={'projects'} element={<Projects />} />
            <Route path={'project/:id'} element={<ProjectPage />} />
            <Route path={'contacts'} element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
