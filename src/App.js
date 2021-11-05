import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './pages/about';
import ContactForm from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio'
import Certs from './pages/certifications'
import DigitalArt from './pages/digital-art'

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    switch(currentPage){
      case "About":
        return <About/>
      case "Resume": 
        return <Resume/>
      case "Certs":
        return <Certs/>
      case "Digital-Art":
        return <DigitalArt/>
      case "Portfolio":
        return <Portfolio/>
      default: 
        return <ContactForm/>
    }
  };


  return (
    <div>
      <Nav
        currentPage={currentPage} handlePageChange={handlePageChange}
      ></Nav>
      <main>
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </main>
    </div>
  );
}

export default App;