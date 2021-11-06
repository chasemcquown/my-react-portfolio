import React from 'react';

import home from '../assets/home-pier.jpg'
import selfie from '../assets/chasemcquown.jpg'
import mammoth from '../assets/mammoth-storm.jpg'



function About() {
    return (
        <section className="my-5">
          <div class="hero">
        <div class="hero-item hero-item-1">
          <img src={home} alt="A selfie of me in Salt Lake City" />
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
          <p className="about-p">Hola! My name is Chase McQuown and I'm officially a University of Texas Coding Boot Camp alumni (check out my certification on the certs page)! I also consider myself quite the outdoorsman. My days off generally consist of fishing, snowboarding, skateboarding, or camping (time permitted). Thanks for stopping by!</p>
        </span>
        </section>
    );
};

export default About;