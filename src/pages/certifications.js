import React from 'react';

import codingCert from '../assets/coding-cert.png'

function Certifications() {
  return (
      <section>
            <div  id="my-certs" class="my-certs">
                <h2>
                  <br/>
                  <span className='font-link section-2-h2'>
                    Cerifications
                  </span>
                </h2>
                    <a className="cert-1" href="https://drive.google.com/file/d/1sx-t49Y1_QjwUdUWqmWXIpPzMJSI6NmI/view?usp=sharing" target="_blank" download>
                        <img src={codingCert} alt="W3Schools" width="500" height="350"/>
                    </a>
                <br></br>
            </div>
       </section>
       
  );
}
export default Certifications;