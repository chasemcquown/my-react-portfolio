import React from 'react';

import codingCert from '../assets/coding-cert.png'

function Certifications() {
  return (
      <section>
            <div  id="my-certs" class="my-certs">
                <h2>
                  <span className='font-link section-2-h2'>
                    My Cerifications
                  </span>
                </h2>
                <div className="cert-1">
                    <a href="https://drive.google.com/file/d/1sx-t49Y1_QjwUdUWqmWXIpPzMJSI6NmI/view?usp=sharing" target="_blank" download>
                        <img src={codingCert} alt="W3Schools" width="500" height="350"/>
                    </a>
                </div>
                <br></br>
                <span className="font-link"><p>(select certification to download)</p></span>
            </div>
       </section>
       
  );
}
export default Certifications;