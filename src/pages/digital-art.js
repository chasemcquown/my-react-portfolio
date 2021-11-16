import React from 'react';

// images
import chiefkeef from '../assets/chiefkeef-art.JPG'
import hallucinating from '../assets/hallucinating-art.JPG'
import future from '../assets/future-art.JPG'
import futura from '../assets/futura-art.JPG'

function DigitalArt() {
  return (
      <section>
            <div  id="my-certs" class="my-certs digital-art">
              <br/>
                <h2>
                  <span className='font-link section-2-h2'>
                    Digital Art
                  </span>
                </h2>
                <a href="https://www.behance.net/gallery/49906563/Swiss-Style-Posters-Future-Chief-Keef-Kane-Grocerys" target="_blank"><img  className="cert-1 art-1" src={chiefkeef} width="650" height="480px"/></a>
                  <br/>
                  <a href="https://www.behance.net/gallery/50465059/60s-psychedelic-posters"><img className="cert-1 art-2" src={hallucinating} width="500px" height="700px"/></a>
                  <br/>
                  <a href="https://www.behance.net/gallery/49906563/Swiss-Style-Posters-Future-Chief-Keef-Kane-Grocerys" target="_blank"><img className="cert-1 art-3" src={future} width="550px" height="380px"/></a>
                  <br/>
                  <a href="https://www.behance.net/gallery/49149535/Futura-Type-Specimen-Poster" target="_blank"><img className="cert-1 art-4" src={futura} width="500px" height="700px"/></a>
            </div>
       </section>
       
  );
}
export default DigitalArt;