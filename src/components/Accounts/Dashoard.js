import './dash.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import React from 'react';
// eslint-disable-next-line sort-imports
import Centerdash from './Centerdash';
import DashItem from './DashboardNav';


const Dashoard = () => (
    <div className="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
              <div className="navi">
                {DashItem.map((item) => (
                  <div className="" key={item.id}>
                    <li className={item.Status}>
                      <NavLink to={item.to}>
                        <i className="fa fa-home" aria-hidden="true">
                          <FontAwesomeIcon icon={item.icon} />
                        </i>
                        <span className="hidden-xs hidden-sm">{item.name}</span>
                      </NavLink>
                    </li>
                  </div>
                ))}
              </div>
            </div>
            <Centerdash />
          </div>
        </div>
      </div>
);

export default Dashoard;
