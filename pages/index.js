import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Layout from '../components/general/Layout';
import { getCordinates } from '../lib/custom';
import { updateHeader, updateSocialHeader } from '../redux/settings/action';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.banner = null;
    this.onScroll = this.onScroll.bind(this);
    this.regSocialHeaderHeight = this.regSocialHeaderHeight.bind(this);
  }

  componentDidMount() {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  regSocialHeaderHeight(header) {
    const { $ } = window;
    if (header) {
      this.props.updateSocialHeader({
        height: $(header).outerHeight(),
      });
    }
  }

  onScroll() {
    console.log;
    if (this.banner) {
      const { $ } = window;
      const bannerHeight = $('#banner').height();
      const socailHeaderHeight = $('#socialHeader').outerHeight();
      const headerHeight = this.props.settings.header.height;
      const bannerPositionTop = getCordinates(this.banner).top;
      const socialHeaderPositionTop = getCordinates(this.banner).top;
      console.log(socialHeaderPositionTop, '||', socailHeaderHeight);
      if ($('html')[0].scrollTop > socailHeaderHeight) {
        this.props.updateHeader({ fixed: false });
      } else {
        console.log('says ');
        this.props.updateHeader({ fixed: true });
      }
      /* if (bannerHeight + bannerPositionTop <= headerHeight) {
        this.props.updateHeader({ transparent: false });
      } else {
        console.log('says ');
        this.props.updateHeader({ transparent: true });
      } */
    }
  }

  render() {
    return (
      <Layout>
        <div id="homePage">
          <div id="banner" ref={(e) => { this.banner = e; }}>
            <div id="socialHeader" ref={this.regSocialHeaderHeight}>
              <span className="fa fa-facebook-square" />
              <span className="fa fa-linkedin-square" />
              <span className="fa fa-twitter-square" />
              <span className="fa fa-instagram" />
            </div>
            <img src="/img/heros/5W9IHRVEb5.jpg" alt="Background" className="bk" />
            <section className="pb-0">
              <div className="content">
                {/*  <div id="searchBar">
                  <input placeholder="Search" />
                  <icon className="fa fa-search" />
                </div> */}

                <div id="spinner" />

                <div id="innovationWeb" style={{ display: 'none' }}>
                  <div className="innovation">
                    <span className="fa fa-book icon" />
                  </div>

                  <div className="innovation">
                    <span className="fa fa-medkit icon" />
                  </div>

                  <div className="innovation">
                    <span className="fa fa-leaf icon" />
                  </div>

                  <div className="innovation">
                    <span className="fa fa-gears icon" />
                  </div>

                  <div className="innovation">
                    <span className="fa fa-book icon" />
                  </div>

                  <div className="innovation">
                    <span className="fa fa-book icon" />
                  </div>

                  <div className="innovation">
                    <span className="fa fa-book icon" />
                  </div>
                </div>

                <div className="nav-list">
                  <div className="nav-item education">
                    <span className="fa fa-book icon" />
                    <p>Education</p>
                  </div>

                  <div className="nav-item health">
                    <span className="	fa fa-medkit icon" />
                    <p>Health</p>
                  </div>

                  <div className="nav-item agriculture">
                    <span className="	fa fa-leaf icon" />
                    <p>Agriculture</p>
                  </div>

                  <div className="nav-item technology">
                    <span className="	fa fa-gears icon" />
                    <p>Technology</p>
                  </div>

                  <div className="nav-item others">
                    <span className="	fa fa-book icon" />
                    <p>Others</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section id="missionSection" className="o-hidden">
            <div className="col-md-9 col-lg-7 left">
              <h2 className="section-title text-center">Bridging Africa's Mission</h2>
              <p>
                Bridging Africa is an initiative that was born from AfricaVsVirus ideation. Working to provide lasting solutions to Covid-19, we realize that the real problem in Africa, is not the lack of innovations but lack of a collaborative network that is performance-driven and focused on impact.
              </p>

              <p>
                That is how Bridging Africa came to be. A platform that gives visibility to innovations; promote and facilitate collaboration between innovators from across Africa and provide them with the opportunity to access seed funding for their startup phase while connecting them to the social investors.
              </p>
              <div className="text-center">
                <button type="button" className="btn btn-info">Learn more</button>
              </div>
            </div>
            <div className="col-md-9 col-lg-5 right">
              <img src="/img/square-2.jpg" className="img-fluid rounded shadow" alt="j" />
            </div>
          </section>

          <section id="extraSection">
            <div className="row">
              <div className="col-md-9 col-lg-9">
                <h3 className="display-5 title">Latest Blog Articles</h3>
                <div className="row content">
                  <div className="blog-post col-lg-4 ">
                    <div className="card h-100 hover-box-shadow">
                      <div className="d-block bg-gradient rounded-top position-relative">
                        <img
                          className="card-img-top hover-fade-out"
                          src="/img/case-studies/thumb-5.jpg"
                          alt="accompanying Treva testimonial"
                        />

                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Blog Title</h5>
                        <p className="card-info">
                          Consectetur libero imp faucibus nisl tincidunt. Sansa tellus mauris a diam maecenas sed.
                        </p>
                        <a href="#" className="stretched-link">Read Story</a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post col-lg-4 ">
                    <div className="card h-100 hover-box-shadow">
                      <div className="d-block bg-gradient rounded-top position-relative">
                        <img
                          className="card-img-top hover-fade-out"
                          src="/img/case-studies/thumb-5.jpg"
                          alt="accompanying Treva testimonial"
                        />

                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Blog Title</h5>
                        <p className="card-info">
                          Consectetur libero imp faucibus nisl tincidunt. Sansa tellus mauris a diam maecenas sed.
                        </p>
                        <a href="#" className="stretched-link">Read Story</a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post col-lg-4 ">
                    <div className="card h-100 hover-box-shadow">
                      <div className="d-block bg-gradient rounded-top position-relative">
                        <img
                          className="card-img-top hover-fade-out"
                          src="/img/case-studies/thumb-5.jpg"
                          alt="accompanying Treva testimonial"
                        />

                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Blog Title</h5>
                        <p className="card-info">
                          Consectetur libero imp faucibus nisl tincidunt. Sansa tellus mauris a diam maecenas sed.
                        </p>
                        <a href="#" className="stretched-link">Read Story</a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post col-lg-4 ">
                    <div className="card h-100 hover-box-shadow">
                      <div className="d-block bg-gradient rounded-top position-relative">
                        <img
                          className="card-img-top hover-fade-out"
                          src="/img/case-studies/thumb-5.jpg"
                          alt="accompanying Treva testimonial"
                        />

                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Blog Title</h5>
                        <p className="card-info">
                          Consectetur libero imp faucibus nisl tincidunt. Sansa tellus mauris a diam maecenas sed.
                        </p>
                        <a href="#" className="stretched-link">Read Story</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="featuredCompany" className="col-md-6 col-lg-3">
                <h3 className="display-5 title">Featured Companies</h3>
                <div className="content">
                  <Link href="/">
                    <a className="fa fa-500px company-icon" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-amazon company-icon" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-adn company-icon" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-android company-icon" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-angellist company-icon" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-apple company-icon" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-bandcamp company-icon" />
                  </Link>

                </div>
              </div>

            </div>
          </section>

          <section id="feedback">
            <h2>Submit your email and we will reach out to you once our website is operational</h2>
            <div id="box">
              <input placeholder="Input email" />
              <button type="button" className="btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3">Submit</button>
            </div>
          </section>
        </div>

      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({ settings: state.settings });
const mapDispatchToProps = (dispatch) => ({
  updateHeader: (props) => dispatch(updateHeader(props)),
  updateSocialHeader: (props) => dispatch(updateSocialHeader(props)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
