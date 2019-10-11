import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import * as AppleData from '../data';

function SubNav(props) {
  const [subs, setSubs] = useState([]);
  const id = props.match.params.id;
  // console.log(props);

  useEffect(() => {
    setSubs(AppleData[`${id}`]);
  }, [id]);

  return (
    <div className="subNav">
      {subs.map((sub, i) => (
        <Nav key={i} category={sub} />
      ))}
    </div>
  );
}

export default SubNav;
