import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio'

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