import React from 'react';
import Link from 'next/link';
import LayoutSam from '../components/general/Layout-sam';
import Layout from '../components/general/Layout';

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <div id="crowdfunding">
          <div className="banner">
            <div className="bk" />
            <div className="fk">
              <h1>Crowdfunding</h1>
            </div>
          </div>
          <div className="page-container">
            <div id="top">
              <h2 className="header"> Categories </h2>

              <div id="filter">
                <Link href="#">
                  <a>
                    <div className="inno-catagroy-card" style={{ backgroundImage: 'url(/images/product/innovation-1.jpg)' }}>
                      <div className="inno-catagroy-card-content">
                        <h4> Technology </h4>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="inno-catagroy-card" style={{ backgroundImage: 'url(/images/product/innovation-2.jpg)' }}>
                      <div className="inno-catagroy-card-content">
                        <h4> Education </h4>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="inno-catagroy-card" style={{ backgroundImage: 'url(/images/product/innovation-3.jpg)' }}>
                      <div className="inno-catagroy-card-content">
                        <h4> Health </h4>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="inno-catagroy-card" style={{ backgroundImage: 'url(/images/product/innovation-4.jpg)' }}>
                      <div className="inno-catagroy-card-content">
                        <h4> Agriculture </h4>
                      </div>
                    </div>
                  </a>
                </Link>

              </div>

            </div>

            <div id="innovations" uk-slider="finite: true">

              <div className="grid-slider-header">
                <h1>fundraisers</h1>
              </div>

              <div id="fundraisers">
                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="fundraiser">
                  <div className="thumbnail">
                    <img src="/images/product/images.jpg" alt="" />
                  </div>
                  <div className="info">

                    <h3 className="title">title</h3>
                    <p>The description about the fundraiser comes in here but most not be more than two full lines</p>
                    <div>
                      <p>
                        <b>Raised : </b> $15,000
                      </p>
                      <p>
                        <b>Target : </b> $1m
                      </p>
                    </div>
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
