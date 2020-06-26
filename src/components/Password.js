/* eslint-disable sort-imports */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faEnvelopeOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SectionCustomer, SectionOne } from '../containers/SignupSections/SectionOne';
import { SectionFarmer } from './Login';

class Password extends Component {
  render() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (isAuthenticated) return <Redirect to="/home" />;
    return (
      <div className="main-bg ">
        <div className="sub-main">
          <div className="vertical-tab">
            <SectionOne />
            <SectionFarmer />
            <SectionCustomer />
            <div id="section3" className="section-icon">
              <input type="radio" name="sections" id="option3" defaultChecked />
              <label htmlFor="option3" className="icon-left">
                <span className="fa fa-lock" aria-hidden="true">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                Forgot Password?
              </label>
              <article>
                <form action="#" method="post">
                  <h3 className="legend last">Reset Password</h3>
                  <p className="para-style">
                    Enter your email address below and we will send you an email with instructions.
                  </p>
                  <p className="para-style-2">
                    <strong>Need Help?</strong> Learn more about how to <a href="#">retrieve an existing account.</a>
                  </p>
                  <div className="input">
                    <span className="fa fa-envelope-o" aria-hidden="true">
                      <FontAwesomeIcon icon={faEnvelopeOpen} />
                    </span>
                    <input type="email" placeholder="Email" name="email" required />
                  </div>
                  <button type="submit" className="bt submit last-btn">
                    Reset
                  </button>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Password;
