import React from 'react';

import spotty from '../assets/bw-spotty.jpg'
import selfie from '../assets/snowbird.jpeg'
import mammoth from '../assets/mammoth-storm.jpg'



function About() {
    return (
        <section className="my-5">
          <div class="hero">
        <div class="hero-item hero-item-1">
          <img src={spotty} alt="A selfie of me in Salt Lake City" />
        </div> 
        <div class="hero-item hero-item-3">
          <img src={mammoth} alt="Trees and clouds from Devil's Post Pile in Mammoth Lakes, CA" />
        </div>
        <div class="hero-item hero-item-2">
          <img src={selfie} alt="Snowboarding at Bear Mountain Resort in Big Bear Lake, CA" />
        </div>
      </div>
      <br/>
      <br/>
        <span className='font-link'>
          <p>Welcome! My name is Chase McQuown, and I'm currently a student of the coding bootcamp at UT Austin. I reside in Huntington Beach, CA and love skateboarding, fishing, snowboarding, hiking, camping, the ocean, and all things outdoors. I also have a newly discovered love/hate relationship with coding.</p>
        </span>
        </section>
    );
};

export default About;