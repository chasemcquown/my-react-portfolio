import React from "react";

function Nav(props) {

  const tabs = ['About', 'Contact', 'Portfolio', 'Resume']

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span className='font-link'>
            Chase McQuown
          </span>
        </a>
      </h2>
      <nav>
      <ul className="flex-row">
      {tabs.map(tab => (
        <li className="mx-2" key={tab}>
          <span className='font-link'>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link' 
              }
            >
              {tab}
            </a>
          </span>
        </li>
      ))}
    </ul>
      </nav>
    </header>
  );
}

export default Nav;