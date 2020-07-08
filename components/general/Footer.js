/* eslint-disable react/no-danger */
import React from 'react';
import Link from 'next/link';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div className="content">
            <div className="column">
              <h4>About Bridging Afrika</h4>
              <p>
                Do non amet proident eiusmod magna et. Anim ipsum aliquip reprehenderit est in incididunt sit. Sit do eu labore irure. Dolor laboris commodo ea ad labore reprehenderit. Proident ex nisi irure voluptate cupidatat cupidatat mollit nisi ad do enim sunt non. Ex ipsum est anim laboris officia deserunt elit.

                Mollit ad aliquip cupidatat proident dolor adipisicing non aute exercitation. Sit reprehenderit ea irure exercitation ipsum fugiat voluptate laboris proident ex esse sit quis quis. Elit irure ut non veniam incididunt enim veniam aliquip duis proident Lorem. Qui veniam nostrud officia ipsum deserunt voluptate.
              </p>
            </div>

            <div className="column">
              <h4>Quick Links</h4>
              <p className="link">
                <Link href="/"><a>Home</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>About</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>Innovations</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>Profiles</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>Crowdfunding</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>Blog</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>Forum</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>Contact</a></Link>
              </p>
            </div>

            <div className="column">
              <h4>Stay in touch</h4>
              <div className="infos">
                <div className="info">
                  <span className="icon-map-marker icon" />
                  <span>The address to the company's physical location comes here</span>
                </div>
                <div className="info">
                  <span className="icon-envelope icon" />
                  <span>Info@bridgingAfrika.com</span>
                </div>
                <div className="info">
                  <span className="icon-telephone icon" />
                  <span>090673248798</span>
                </div>
              </div>
              <div className="social">
                <span className="fa fa-facebook-square" />
                <span className="fa fa-linkedin-square" />
                <span className="fa fa-twitter-square" />
                <span className="fa fa-instagram" />
              </div>
            </div>
          </div>
          <p className="copy-right">copyright &copy; 2020 Bridging Afrika</p>
        </footer>
        {/*  <a href="#top" className="btn btn-primary rounded-circle btn-back-to-top" data-smooth-scroll data-aos="fade-up" data-aos-offset="2000" data-aos-mirror="true" data-aos-once="false">
          <span alt="Icon" className="icon bg-white" data-inject-svg />
        </a> */}
      </>
    );
  }
}

export default Footer;
