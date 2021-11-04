import React from 'react';

// mui imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Portfolio() {
  return (
      <section>
            <div  id="my-applications" class="section-2">
                <h2>
                  <span className='font-link'>
                    My Applications
                  </span>
                </h2>
                    <div class="apps"><a href="https://evening-oasis-97339.herokuapp.com/" target="_blank"><iframe src="https://farm-gomarket.herokuapp.com/" frameborder="0"></iframe></a></div>
                    <div class="apps"><a href="https://chasemcquown.github.io/run-buddy/" target="_blank"><iframe src="https://chasemcquown.github.io/run-buddy/" frameborder="0"></iframe></a></div>
                    <div class="apps"><a href="https://hsafiya.github.io/dinner_n_movie/" target="_blank"><iframe src="https://hsafiya.github.io/dinner_n_movie/" frameborder="0"></iframe></a></div>
                    <div class="apps"><a href="https://evening-oasis-97339.herokuapp.com/" target="_blank"><iframe src="https://evening-oasis-97339.herokuapp.com/" frameborder="0"></iframe></a></div>
            </div>
       </section>
       
  );
}
export default Portfolio;
