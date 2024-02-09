import './contact.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import LanguageIcon from '@mui/icons-material/Language';

export const Contact=()=>{
    return(
        <div className="contact">
            <div className='contactform'>
            <div className='form'>
                <p id='infotext'>Get in touch</p>
                <input type='text' placeholder='Name' ></input>
                <input type='text' placeholder='Email' ></input>
                <input type='text' placeholder='Mobile ' ></input>
                <textarea id="message" name="message" placeholder='Message' ></textarea>
                <button type='button' id='button'>Send Message </button>
                </div>
                </div>
                <div className='info'>
                <p id='infotext1'>Contact information <br/>
                <span id='desc'>I'am open for any suggestion or just have a chat</span>
                </p>
                <div className='icons1'>
                <div className='address'><LocationOnIcon/>
                <p id='address'>Address : 8/56, RamammaStreet, Gudikal, AndhraPradesh, 518360</p>
                </div>
                <div className='address'><LocalPhoneIcon/>
                <p id='address'>Phone : +91 9652002484</p>
                </div>
                <div className='address'><SendIcon/>
                <p id='address'>Email : nagallisreedhar1918@gmail.com</p>
                </div>
                <div className='address'><LanguageIcon/>
                <p id='address'>website : www.sreedharnagalli.com</p>
                </div>

                </div>
            </div>
        </div>
    )
}