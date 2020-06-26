/* eslint-disable react/no-danger */
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-primary-3 text-white links-white pb-4 footer-1" style={{ textAlign: 'center' }}>
          <div className="container">

            <div className="row flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-center">
              <div className="col-auto" style={{ width: '100%' }}>
                <div className="d-flex flex-column flex-sm-row align-items-center text-small">
                  <div className="text-muted0" style={{ textAlign: 'center', width: '100%' }}>&copy; 2020 protected by reCAPTCHA and subject to Google's <a href="https://www.google.com/policies/privacy/" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a>
                  </div>
                </div>
              </div>
              <div className="col-auto mt-3 mt-lg-0">
                <ul className="list-unstyled d-flex mb-0">
                  <li className="mx-3">
                    <a href="#" className="hover-fade-out">
                      <img src="/img/icons/social/dribbble.svg" alt="Dribbble" className="icon icon-xs bg-white" data-inject-svg />
                    </a>
                  </li>
                  <li className="mx-3">
                    <a href="#" className="hover-fade-out">
                      <img src="/img/icons/social/twitter.svg" alt="Twitter" className="icon icon-xs bg-white" data-inject-svg />
                    </a>
                  </li>
                  <li className="mx-3">
                    <a href="#" className="hover-fade-out">
                      <img src="/img/icons/social/github.svg" alt="Github" className="icon icon-xs bg-white" data-inject-svg />
                    </a>
                  </li>
                  <li className="mx-3">
                    <a href="#" className="hover-fade-out">
                      <img src="/img/icons/social/facebook.svg" alt="Facebook" className="icon icon-xs bg-white" data-inject-svg />
                    </a>
                  </li>
                  <li className="mx-3">
                    <a href="#" className="hover-fade-out">
                      <img src="/img/icons/social/google.svg" alt="Google" className="icon icon-xs bg-white" data-inject-svg />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/*  <a href="#top" className="btn btn-primary rounded-circle btn-back-to-top" data-smooth-scroll data-aos="fade-up" data-aos-offset="2000" data-aos-mirror="true" data-aos-once="false">
          <img src="/img/icons/interface/icon-arrow-up.svg" alt="Icon" className="icon bg-white" data-inject-svg />
        </a> */}
      </>
    );
  }
}

export default Footer;
