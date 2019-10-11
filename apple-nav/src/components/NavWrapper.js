import React from 'react';
import Nav from './Nav';
import { Link, NavLink } from 'react-router-dom';
import { data } from '../data';

function NavWrapper(props) {
  // console.log(props);
  return (
    <div className="navWrapper">
      <Link to="/">
        <span className="apple-types">Home</span>
      </Link>
      {data.map((category, i) => (
        <NavLink activeClassName="active" key={i} to={`/${category.sub}`}>
          <Nav key={category.id} sub={category.sub} category={category.type} />
        </NavLink>
      ))}
    </div>
  );
}

export default NavWrapper;
