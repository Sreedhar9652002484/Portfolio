import cs from '../About/about.css'

export const About=()=>{
    return(
        <div className='mainabout'>
        <div className='about'>
            <div className='abouttext'><p  id="text1"style={{fontSize:'2.3rem', color:'white', fontWeight:'650'}} >ABOUT ME</p>
            <hr id='hr'></hr>
            </div>
        

                <div className='details'>
                <p>I am <span style={{color:"#ff2d03"}}>Nagalli Sreedhar</span></p>
                <p>I am a Full stack Dot Net Developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                <p><span id='spanAbout'>Full Name  </span>  :  Nagalli Sreedhar</p>
                <p><span id='spanAbout'>Age </span> :  23 Years</p>
                <p><span id='spanAbout'>Nationality  </span> :  Indian</p>
                <p><span id='spanAbout'>Languages Known</span> :  English, Telugu, Kannada, Hindi, Tamil.</p>
                <p><span id='spanAbout'>Address </span> :  Yemmiganur, Kurnool Dist, AndhraPradesh state, zipcode : 518360</p>
                </div>
            
            </div>
        </div>
    )
}