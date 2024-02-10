import fb from '../../assests/fb.svg'
import git from '../../assests/git.png'
import twit from '../../assests/tw.png'
import css from '../Home/home.css'

export const Home=()=>{
   
   
    return(

<div className='right'>
        <div className='text'>
          <p className='hii' style={{ fontSize: '3rem', fontWeight: '650', color: 'white' }}>Hi, I am <span style={{ fontSize: '3rem', fontWeight: '650', color: "#ff2d03" }}>Nagalli Sreedhar</span></p>
          <p style={{  fontSize: '1.3rem' }}> I am a passionate Fullstack Dot Net Developer with a love for crafting robust and user-friendly web applications. I also make website more & more interactive with UI's. 🌐</p>
          <div className='icons'>
            <img id='icon' src={fb}  ></img>
            <a href="https://github.com/Sreedhar9652002484/" target="_blank" rel="noopener noreferrer">
              <img id="icon" src={git} alt="Github Icon" />
            </a>  
            <a href='https://twitter.com/SRI191819'>       
            <img id='icon' src={twit}></img></a>   
          </div>
          
        </div>
      </div>

    )
}