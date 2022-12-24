import './App.css';
import tv from './Image/tv.png'
import el from './Image/eleven.jpg'
import luna from './Image/luna.png'
import plus from './Image/plus.png'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
            <div className='head'>

              <div className='headerContainer'>
                <div className='netflix'>Xmovie</div>
                <Link to={'/list'}><button className='signUp'>Movies</button></Link>
              </div>

              <div className='midheadCon'>
                <div className='innerheadCon'>
                  <div style={{color: "white" , fontSize: '60px' , fontWeight: "700"}}>Unlimited movies, TV <br></br> shows, and more.</div>
                  <div style={{color: "white" , fontSize: '26px' }}>Watch anywhere. Cancel anytime.</div>
                  <div style={{color: "white" , fontSize: '20px' , fontWeight: "400"}}>Ready to watch? Enter your email to create or restart your membership.</div>
                  <div className='email'>
                    <input className='input' placeholder='Email address'></input>
                    <button className='button'>Get Start</button>
                  </div>
                </div>
              </div>
            </div>
        </header>

        <div className='dash'></div>

          <div className='tvANDtextHold'>
            <div className='text'>
              <div style={{color: "white" , fontSize: '3.125rem' , lineHeight: "1.1", marginBottom: "0.5rem" , fontWeight: "700"}}>Enjoy on your TV.</div>
              <div style={{color: "white" , fontSize: '1.625rem' , fontWeight: "400"}}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
            </div>
             <img src={tv}></img>
          </div>

        <div className='dash'></div>

        <div className='tvANDtextHold'>
            <img src={el}></img>
            <div className='text'>
              <div style={{color: "white" , fontSize: '3.125rem' , lineHeight: "1.1", marginBottom: "0.5rem" , fontWeight: "700"}}>Download your shows to watch offline.</div>
              <div style={{color: "white" , fontSize: '1.625rem' , fontWeight: "400"}}>Save your favorites easily and always have something to watch.</div>
            </div>
        </div>

        <div className='dash'></div>
        
        <div className='watch'>
            <div className='text'>
              <div style={{color: "white" , fontSize: '3.125rem' , lineHeight: "1.1", marginBottom: "0.5rem" , fontWeight: "700"}}>Watch everywhere.</div>
              <div style={{color: "white" , fontSize: '1.625rem' , fontWeight: "400"}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
            </div>
             <div></div>
        </div>

        <div className='dash'></div>


        <div className='CreateKidsPro'>
          <img src={luna}></img>
          <div className='text'>
            <div style={{color: "white" , fontSize: '3.125rem' , lineHeight: "1.1", marginBottom: "0.5rem" , fontWeight: "700"}}>Create profiles for kids.</div>
            <div style={{color: "white" , fontSize: '1.625rem' , fontWeight: "400"}}>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</div>
          </div>
        </div>

        <div className='dash'></div>
        <div className='LastSec'>
          <div className='questions'>Frequently Asked Questions</div>
          <div className='infoBoutNetflix'>
            <div className='per'>
              
              <div className='WhatIsNetflix'>
                <div className='hary'>
                  <div style={{fontSize: '25px' , fontWeight: "400"}}>What is Neflix?</div>
                  <img src={plus} className='plus'></img>
                </div>
              </div>
              <div className='WhatIsNetflix'>
                <div className='hary'>
                  <div style={{fontSize: '25px' , fontWeight: "400"}}>How much does Netflix cost?</div>
                  <img src={plus} className='plus'></img>
                </div>
              </div>

              <div className='WhatIsNetflix'>
                <div className='hary'>
                  <div style={{fontSize: '25px' , fontWeight: "400"}}>Where can i watch?</div>
                  <img src={plus} className='plus'></img>
                </div>
              </div>
              <div className='WhatIsNetflix'>
                <div className='hary'>
                  <div style={{fontSize: '25px' , fontWeight: "400"}}>How do i cancel?</div>
                  <img src={plus} className='plus'></img>
                </div>
              </div>

              <div className='WhatIsNetflix'>
                <div className='hary'>
                  <div style={{fontSize: '25px' , fontWeight: "400"}}>What can i watch on Netflix?</div>
                  <img src={plus} className='plus'></img>
                </div>
              </div>

              <div className='WhatIsNetflix'>
                <div className='hary'>
                  <div style={{fontSize: '25px' , fontWeight: "400"}}>Is Netflix good for kids?</div>
                  <img src={plus} className='plus'></img>
                </div>
              </div>


            </div>
          </div>
          <div></div>
        <div className='start'>
          <div className='ready'>Ready to watch? Enter your email to create or restart your membership.</div>
          <div className='email'>
            <input className='input' placeholder='Email address'></input>
            <button className='button'>Get Start</button>
          </div>
        </div>
        </div>

        <div className='dash'></div>

        <div className='mainFooter'>
          <div className='Footer'>
            <div className='position'>Questions? Contact us.</div>
            <div className='row'>
              <div className='column'>
                <div className='gap'>FAQ</div>
                <div className='gap'>Investor Relations</div>
                <div className='gap'>Privacy</div>
                <div className='gap'>Speed Test</div>
              </div>
              <div>
                <div className='gap'>Help Center</div>
                <div className='gap'>Jobs</div>
                <div className='gap'>Cookie Preferences</div>
                <div className='gap'>Legal Notices</div>
              </div>
              <div>
                <div className='gap'>Account</div>
                <div className='gap'>Ways To Watch</div>
                <div className='gap'>Corporate Information</div>
                <div className='gap'>Only on Netflix</div>
              </div>
              <div>
                <div className='gap'>Media Center</div>
                <div className='gap'>Terms of Use</div>
                <div className='gap'>Contact Us</div>
              </div>
            </div>
            <div className='positionm'>Netflix Mongolia</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
