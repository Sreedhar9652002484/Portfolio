import './App.css';
import { Header } from './components/header/header';
import { Home } from './components/Home/home';
import { About } from './components/About/about';
import { useReducer} from 'react';
import { Resume } from './components/resume/resume';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';




function App() {

  const intialState={
    home:true,
    about:false,
    resume:false,
    projects:false,
    contact:false
  }
const reducer = (state, action)=>{
  switch(action.type){
    case "HOME":
      return {...state, home:true, about:false, resume:false,projects:false, contact:false}
    case "ABOUT":
      return {...state, home:false, about:true, resume:false, projects:false, contact:false}
    case "RESUME":
      return {...state, home:false, about:false, resume:true,projects:false, contact:false}
    case "PORTFOLIO":
      return {...state, home:false, about:false, resume:false, projects:true, contact:false}
    case "CONTACT":
      return {...state, home:false, about:false, resume:false, projects:false, contact:true}

  }
}

const[state, dispatch]=useReducer(reducer, intialState);


return (
    <div className="App">
      <div className='left'>
        <Header home={() => dispatch({ type: "HOME" })} about={() => dispatch({ type: "ABOUT" })} resume={()=>dispatch({type:"RESUME"})} portfolio={()=>dispatch({type:"PORTFOLIO"})} contact={()=>dispatch({type:"CONTACT"})}/>
      </div>
      <div className='right1'>
        {state.home && <Home/>}
        {state.about && <About/>}
        {state.resume && <Resume/>}
        {state.projects && <Portfolio/>}
        {state.contact && <Contact/>}
      </div>
    </div>
  );
}

export default App;
