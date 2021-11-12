import React from 'react';

import theboys from '../assets/theboys.jpg'
import selfie from '../assets/theranch.jpg'
import mammoth from '../assets/mammerino.jpg'



function About() {
    return (
        <section className="my-5">
          <div class="hero">
        <div class="hero-item hero-item-1">
          <img src={theboys} alt="The boys and I hiking in Mammoth Lakes, CA" />
        </div> 
        <div class="hero-item hero-item-2">
          <img src={selfie} alt="A picture of Chase McQuown" />
        </div>
        <div class="hero-item hero-item-3">
          <img src={mammoth} alt="Trees and clouds from Devil's Post Pile in Mammoth Lakes, CA" />
        </div>
      </div>
      <br/>
      <br/>
        <span className='font-link'>
          <p className="about-p">Welcome! My name is Chase McQuown, and I'm a graduate of the Coding Boot Camp at the University of Texas (my certification is viewable via the certs tab). I love the outdoors, and my time off generally consists of skateboarding, fishing, snowboarding, camping, the beach, or crying because my code isn't working. Anyways, thanks for stopping by! </p>
        </span>
        </section>
    );
};

export default About;