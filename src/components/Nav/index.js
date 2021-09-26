import React from "react";

function Nav(props) {
  // const {
  //   contactSelected,
  //   setContactSelected
  // } = props;


  // const handleClick = (item) => {
  //   console.log(item);
  //   return item;
  // };

  const tabs = ['About', 'Contact', 'Portfolio', 'Resume']

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"></span> Chase McQuown
        </a>
      </h2>
      <nav>
      <ul className="flex-row">
      {tabs.map(tab => (
        <li className="mx-2" key={tab}>
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