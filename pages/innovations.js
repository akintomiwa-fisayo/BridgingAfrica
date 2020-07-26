import React from 'react';
import Link from 'next/link';
import LayoutSam from '../components/general/Layout-sam';
import Layout from '../components/general/Layout';

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <div id="innovations">
          <div className="banner">
            <div className="bk" />
            <div className="fk">
              <h1>Innovations</h1>
            </div>
          </div>
          <div id="top">
            <div id="filter">
              <Link href="#">
                <a className="ba-active ba-btn"> Technology
                </a>
              </Link>

              <Link href="#">
                <a className="ba-btn"> Education </a>
              </Link>

              <Link href="#">
                <a className="ba-btn"> Health </a>
              </Link>

              <Link href="#">
                <a className="ba-btn"> Agriculture </a>
              </Link>
            </div>
          </div>
          <div className="page-container">

            <div id="innovations" uk-slider="finite: true">

              <div id="fundraisers">
                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>
                      Deserunt nisi occaecat consectetur minim irure tempor aliquip non elit. Laboris do laboris in commodo aliquip et cupidatat voluptate ea ea in.
                    </p>
                  </div>
                </div>
                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>
                      Deserunt nisi occaecat consectetur minim irure tempor aliquip non elit. Laboris do laboris in commodo aliquip et cupidatat voluptate ea ea in.
                    </p>
                  </div>
                </div>
                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>
                      Deserunt nisi occaecat consectetur minim irure tempor aliquip non elit. Laboris do laboris in commodo aliquip et cupidatat voluptate ea ea in.
                    </p>
                  </div>
                </div>
                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>
                      Deserunt nisi occaecat consectetur minim irure tempor aliquip non elit. Laboris do laboris in commodo aliquip et cupidatat voluptate ea ea in.
                    </p>
                  </div>
                </div>
                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>
                      Deserunt nisi occaecat consectetur minim irure tempor aliquip non elit. Laboris do laboris in commodo aliquip et cupidatat voluptate ea ea in.
                    </p>
                  </div>
                </div>
                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>
                      Deserunt nisi occaecat consectetur minim irure tempor aliquip non elit. Laboris do laboris in commodo aliquip et cupidatat voluptate ea ea in.
                    </p>
                  </div>
                </div>
                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>
                      Deserunt nisi occaecat consectetur minim irure tempor aliquip non elit. Laboris do laboris in commodo aliquip et cupidatat voluptate ea ea in.
                    </p>
                  </div>
                </div>
                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>
                      Deserunt nisi occaecat consectetur minim irure tempor aliquip non elit. Laboris do laboris in commodo aliquip et cupidatat voluptate ea ea in.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </Layout>
    );
  }
}
export default Blog;
