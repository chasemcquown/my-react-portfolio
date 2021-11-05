import React from "react";

function Nav(props) {

  const tabs = ['About', 'Contact', 'Portfolio', 'Resume', 'Certs', 'Digital Art']

  return (
    <header className="flex-row px-1">
      <h1>
        <a data-testid="link" href="/">
          <span className='font-link my-name'>
            Chase McQuown
          </span>
        </a>
      </h1>
      <nav>
      <ul className="flex-row">
      {tabs.map(tab => (
        <li className="mx-2 font-link" key={tab}>
          <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link' 
              }
          >
              {tab}
          </a>
        </li>
      ))}
    </ul>
      </nav>
    </header>
  );
}

export default Nav;