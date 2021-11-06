import React from 'react';

// images 
import resume from '../assets/resume.jpg'

function Resume() {
    return (
        <section>
              <div  id="my-certs" class="my-certs">
                  <br/>
                  <h2>
                    <span className='font-link section-2-h2'>
                      Click image to download
                    </span>
                  </h2>
                    <a className="cert-1" href="https://drive.google.com/file/d/166MjWoGgeYQvtPQMSSu1Gl-rh9btCAqJ/view?usp=sharing" target="_blank" download>
                            <img src={resume} alt="W3Schools" width="500" height="350"/>
                    </a>
                  <br/>
              </div>
         </section>
         
    );
  }
  export default Resume;