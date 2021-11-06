import React from 'react';

// mui imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// photo imports 
import FarmGo from '../assets/black-farmgo.png'
import RunBuddy from '../assets/black-runbuddy.png'

function Portfolio() {
  return (
      <section>
            <div  id="my-applications" class="section-2">
                <h2>
                  <span className='font-link section-2-h2'>
                    My Applications
                  </span>
                </h2>
              <div className="app-cards">
                <Card  className="farmgo" sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      width="180"
                      src={FarmGo}
                      alt="FarmGo market"
                    />
                    <CardContent>
                    <span className="font-link"><p>FarmGo was the the third and final team project that I colloborated on during my 6 month boot camp. My responsibilities were mainly confined to the server directory: server file logic, back-end auth logic,  and typeDefs file logic. I also designed the order history page for the front-end.  </p></span>
                    </CardContent>
                  <a href="https://farm-gomarket.herokuapp.com/" target="_blank"><button className="portfolio-buttons">View</button></a>
                </Card>
                <Card className="runbuddy" sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      width="180"
                      src={RunBuddy}
                      alt="RunBuddy"
                    />
                    <CardContent>
                      <span className="font-link"><p>RunBuddy was built via good old fashioned HTML and CSS, and was my first boot camp homework. Despite it's simplicity, it's the assignment that sparked my interest in web development.</p></span>
                    </CardContent>
                  <a href="https://chasemcquown.github.io/run-buddy/" target="_blank"><button className="portfolio-buttons">View</button></a>
                </Card>
              </div>
                    {/* <div class="apps"><a href="https://evening-oasis-97339.herokuapp.com/" target="_blank"><iframe src="https://farm-gomarket.herokuapp.com/" frameborder="0"></iframe></a></div>
                    <div class="apps"><a href="https://chasemcquown.github.io/run-buddy/" target="_blank"><iframe src="https://chasemcquown.github.io/run-buddy/" frameborder="0"></iframe></a></div>
                    <div class="apps"><a href="https://hsafiya.github.io/dinner_n_movie/" target="_blank"><iframe src="https://hsafiya.github.io/dinner_n_movie/" frameborder="0"></iframe></a></div>
                    <div class="apps"><a href="https://evening-oasis-97339.herokuapp.com/" target="_blank"><iframe src="https://evening-oasis-97339.herokuapp.com/" frameborder="0"></iframe></a></div> */}
            </div>
       </section>
       
  );
}
export default Portfolio;
