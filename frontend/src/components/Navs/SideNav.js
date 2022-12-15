import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import SideNavData from './SideNavData.json'
import { removeUnderscores } from "../../utils/helpers";

export const SideNav = () => {
  return (
    <Nav className="navbar bg-white border border-secondary rounded ">
      <ul className="navbar-nav flex-column text-start">
        {
          SideNavData.map(itm => (
            <li 
              className="nav-item"
              key={itm.value}
            >
              <Link
                to={`${itm.link}`}
                className="link"
              >
                { removeUnderscores(itm.title)}
              </Link>
            </li>
          ))
        }
      </ul>
    </Nav>
  )
}