import React, { useReducer, useEffect, useState } from 'react';
import './App.css';
import { Home } from './components/Home/home';
import { About } from './components/About/about';
import { Resume } from './components/resume/resume';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import Navbar from './components/collapsedmenu/menu';
import { Header } from './components/header/header';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { IconButton } from '@mui/material';

function App() {
  const initialState = {
    home: true,
    about: false,
    resume: false,
    projects: false,
    contact: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "HOME":
        return { ...state, home: true, about: false, resume: false, projects: false, contact: false };
      case "ABOUT":
        return { ...state, home: false, about: true, resume: false, projects: false, contact: false };
      case "RESUME":
        return { ...state, home: false, about: false, resume: true, projects: false, contact: false };
      case "PORTFOLIO":
        return { ...state, home: false, about: false, resume: false, projects: true, contact: false };
      case "CONTACT":
        return { ...state, home: false, about: false, resume: false, projects: false, contact: true };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1150);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className='left'>
        {isSmallScreen ? (
          <div>
          <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
           
            <MenuOpenOutlinedIcon style={{color:'white',fontSize:'3rem', backgroundColor:'blue',position:'fixed'}}></MenuOpenOutlinedIcon>
          </div>
          <div className={`menu ${isOpen ? 'active' : ''}`}>
            <div className='menu-content'>
              <Header
                home={() => {dispatch({ type: "HOME" }); toggleMenu()}}
                about={() => {dispatch({ type: "ABOUT" }); toggleMenu()}}
                resume={() => {dispatch({ type: "RESUME" }); toggleMenu()}}
                portfolio={() => {dispatch({ type: "PORTFOLIO" }); toggleMenu()}}
                contact={() => {dispatch({ type: "CONTACT" }); toggleMenu()}}
              />
            </div>
          </div>
        </div>
      
          
        ) : (
          <Header
            home={() => dispatch({ type: "HOME" })}
            about={() => dispatch({ type: "ABOUT" })}
            resume={() => dispatch({ type: "RESUME" })}
            portfolio={() => dispatch({ type: "PORTFOLIO" })}
            contact={() => dispatch({ type: "CONTACT" })}
          />
        )}
      </div>
      <div className='right1'>
        {state.home && <Home />}
        {state.about && <About />}
        {state.resume && <Resume />}
        {state.projects && <Portfolio />}
        {state.contact && <Contact />}
      </div>
      
    </div>
  );
}

export default App;
