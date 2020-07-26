import React from 'react';
import LayoutSam from '../components/general/Layout-sam';
import Layout from '../components/general/Layout';

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <div id="blog">
          <div className="banner">
            <div className="bk" />
            <div className="fk">
              <h1>Blog</h1>
            </div>
          </div>
          <div id="filter">
            <span
              className="ba-active ba-btn"
              href="#"
            > Suggestions
            </span>
            <span
              className=" ba-btn"
              href="#"
            > Newest
            </span>
            <span
              className=" ba-btn"
              href="#"
            > Most Popular
            </span>
          </div>
          <div className="page-container">

            {/* // <!-- contents --> */}
            <div className="main_content">

              <div className="main_content_inner">

                <div className="uk-grid-large" uk-grid="">
                  <div className="uk-width-expand">

                    {/* <!-- Blog Post --> */}
                    <a href="#" className="blog-post">
                      {/* <!-- Blog Post Thumbnail --> */}
                      <div className="blog-post-thumbnail">
                        <div className="blog-post-thumbnail-inner">
                          <span className="blog-item-tag">Tips</span>
                          <img src="/images/blog/1.jpg" alt="" />
                        </div>
                      </div>
                      {/* <!-- Blog Post Content --> */}
                      <div className="blog-post-content">
                        <div className="blog-post-content-info">
                          <span className="blog-post-info-tag button soft-danger"> Health </span>
                          <span className="blog-post-info-date">10 June</span>
                        </div>
                        <h3>How is the response to the Covid-19 organized in Cameroon?</h3>
                        <p>Faced with the challenge of the coronavirus, Cameroon has set up a detection system which obeys a procedure in accordance with the guidelines proposed by the World Health Organization (WHO). </p>
                      </div>
                    </a>

                    {/* <!-- Blog Post --> */}
                    <a href="#" className="blog-post">
                      {/* <!-- Blog Post Thumbnail --> */}
                      <div className="blog-post-thumbnail">
                        <div className="blog-post-thumbnail-inner">
                          <span className="blog-item-tag">Health</span>
                          <img src="/images/blog/2.jpg" alt="" />
                        </div>
                      </div>
                      {/* <!-- Blog Post Content --> */}
                      <div className="blog-post-content">
                        <div className="blog-post-content-info">
                          <span className="blog-post-info-tag button soft-primary"> Health </span>
                          <span className="blog-post-info-date">10 June</span>
                        </div>
                        <h3>Priority access to the Chinese Covid-19 vaccine for Africa?</h3>
                        <p>(Agence Ecofin) - Soon the epilogue? Starting point for the 2019 Coronavirus disease and former epicenter of the pandemic, China can now boast of having acquired some experience in the management of this crisis. Better yet, according to Ding Yifang, a government adviser, a vaccine will soon be mass produced. </p>
                      </div>
                    </a>

                    {/* <!-- Blog Post --> */}
                    <a href="#" className="blog-post">
                      {/* <!-- Blog Post Thumbnail --> */}
                      <div className="blog-post-thumbnail">
                        <div className="blog-post-thumbnail-inner">
                          <img src="/images/blog/3.jpg" alt="" />
                        </div>
                      </div>
                      {/* <!-- Blog Post Content --> */}
                      <div className="blog-post-content">
                        <div className="blog-post-content-info">
                          <span className="blog-post-info-tag button soft-warning"> Health </span>
                          <span className="blog-post-info-date">10 June</span>
                        </div>
                        <h3>Covid-19: clear acceleration of the pandemic in Africa, warns the WHO </h3>
                        <p>The speed at which the number of confirmed cases of Covid-19 has doubled - less than 20 days - shows the acceleration of the spread of the new coronavirus in Africa, warned, Thursday, June 11, the World Health Organization (WHO). </p>
                      </div>
                    </a>

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
