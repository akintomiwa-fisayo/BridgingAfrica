import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import { updateHeader } from '../../redux/settings/action';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.header = null;
    this.regHeight = this.regHeight.bind(this);
  }

  regHeight(header) {
    if (header) {
      this.props.updateHeader({
        height: header.offsetHeight,
      });
    }
  }

  render() {
    const { props } = this;
    // console.log('header props', props);
    const { header } = props.settings;
    const headerStyle = { };

    return (
      <>
        <Head runat="server">
          <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-52115242-17" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag() { dataLayer.push(arguments); }
                      gtag('js', new Date());

                      gtag('config', 'UA-52115242-17');
                    `,
            }}
          />

          <meta charSet="utf-8" />
          <title>Bridging Afrika</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Collaboration for change" />
          {/*   <!-- Begin loading animation --> */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                      window.addEventListener("load", function () { 
                      document.querySelector('body').classList.add('loaded'); });
                    `,
            }}
          />
          {/*   <!-- End loading animation --> */}
          <link href="css/theme.min.css" rel="stylesheet" type="text/css" media="all" />
          <link href="css/demo.css" rel="stylesheet" type="text/css" media="all" />
          <link href="css/styles.css" rel="stylesheet" type="text/css" media="all" />
          {/* <link href="https://fonts.googleapis.com/css?family=Nunito:400,400i,600,700&amp;display=swap" rel="stylesheet" /> */}
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

          {/*  Required vendor scripts (Do not remove)  */}
          <script type="text/javascript" src="/js/jquery.min.js" />
          <script type="text/javascript" src="/js/popper.min.js" />
          <script type="text/javascript" src="/js/bootstrap.js" />

          {/*
             This appears in the demo only.  This script ensures our demo countdowns are always showing a date in the future
             by altering the date before the countdown is initialized */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (($) => {
                    var now = new Date;
                    var day = 864e5;
                    var weeksToAdd = 2;
                    var tenWeeksFromNow = new Date(+now + day * 7 * weeksToAdd).toISOString().slice(0, 10).replace(/\-/g, 'index-2.html');
                    $('[data-countdown-date].add-countdown-time').attr('data-countdown-date', tenWeeksFromNow);
                })(jQuery);
              `,
            }}
          />

          {/*      Optional Vendor Scripts (Remove the plugin script here and comment initializer script out of index.js if site does not use that feature)
          AOS (Animate On Scroll - animates elements into view while scrolling down)  */}
          <script type="text/javascript" src="js/aos.js" />
          {/*      Clipboard (copies content from browser into OS clipboard)  */}
          <script type="text/javascript" src="js/clipboard.min.js" />
          {/*      Fancybox (handles image and video lightbox and galleries)  */}
          <script type="text/javascript" src="js/jquery.fancybox.min.js" />
          {/*      Flatpickr (calendar/date/time picker UI)  */}
          <script type="text/javascript" src="js/flatpickr.min.js" />
          {/*      Flickity (handles touch enabled carousels and sliders)  */}
          <script type="text/javascript" src="js/flickity.pkgd.min.js" />
          {/*      Ion rangeSlider (flexible and pretty range slider elements)  */}
          <script type="text/javascript" src="js/ion.rangeSlider.min.js" />
          {/*      Isotope (masonry layouts and filtering)  */}
          <script type="text/javascript" src="js/isotope.pkgd.min.js" />
          {/*      jarallax (parallax effect and video backgrounds)  */}
          <script type="text/javascript" src="js/jarallax-video.min.js" />
          <script type="text/javascript" src="js/jarallax-element.min.js" />
          {/*      jQuery Countdown (displays countdown text to a specified date)  */}
          <script type="text/javascript" src="js/jquery.countdown.min.js" />
          {/*      jQuery smartWizard facilitates steppable wizard content  */}
          <script type="text/javascript" src="js/jquery.smartWizard.min.js" />
          {/*      Plyr (unified player for Video, Audio, Vimeo and Youtube)  */}
          <script type="text/javascript" src="js/plyr.polyfilled.min.js" />
          {/*      Prism (displays formatted code boxes)  */}
          <script type="text/javascript" src="js/prism.js" />
          {/*      ScrollMonitor (manages events for elements scrolling in and out of view)  */}
          <script type="text/javascript" src="js/scrollMonitor.js" />
          {/*      Smooth scroll (animation to links in-page) */}
          <script type="text/javascript" src="js/smooth-scroll.polyfills.min.js" />
          {/*      SVGInjector (replaces img tags with SVG code to allow easy inclusion of SVGs with the benefit of inheriting colors and styles) */}
          <script type="text/javascript" src="js/svg-injector.umd.production.js" />
          {/*      TwitterFetcher (displays a feed of tweets from a specified account) */}
          <script type="text/javascript" src="js/twitterFetcher_min.js" />
          {/*      Typed text (animated typing effect) */}
          <script type="text/javascript" src="js/typed.min.js" />
          {/*      Required theme scripts (Do not remove)  */}
          <script type="text/javascript" src="js/theme.js" />
          <script type="text/javascript" src="js/custom.js" />
          {/*      This script appears only on the demo.  It is used to delay unnecessary image loading until after the main page content is loaded.  */}

          <script type="text/javascript" src="js/jarallax.min.js" defer />
        </Head>

        <div
          id="header"
          className={`navbar-container${header.transparent ? ' transparent' : ''}${!header.fixed ? ' fixed' : ''}`}
          style={header.fixed ? {
            position: 'absolute',
            top: `${header.fixedTop}px`,
          } : { }}
          ref={this.regHeight}
        >
          <nav className="navbar navbar-expand-lg navbar-light " data-sticky="top">

            <Link href="/index">
              <a id="logo" className="navbar-brand navbar-brand-dynamic-color fade-page">
                <img
                  alt="AfriHub"
                  src="img/logo.png"
                  style={{ borderRadius: '4px', height: '50px' }}
                />
              </a>
            </Link>

            <div className="d-flex align-items-center order-lg-3">
              <Link href="/sign-up">
                <a id="login" className="btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3">Login / Signup </a>
              </Link>

              <button
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-target=".navbar-collapse"
                data-toggle="collapse"
                type="button"
              >
                <img
                  alt="Navbar Toggler Open Icon"
                  className="navbar-toggler-open icon icon-sm"
                  data-inject-svg
                  src="img/icons/interface/icon-menu.svg"
                />
                <img
                  alt="Navbar Toggler Close Icon"
                  className="navbar-toggler-close icon icon-sm"
                  data-inject-svg
                  src="img/icons/interface/icon-x.svg"
                />
              </button>
            </div>

            <div className="collapse navbar-collapse order-3 order-lg-2 justify-content-lg-end" id="navigation-menu">
              <ul className="navbar-nav my-3 my-lg-0">
                <li className="nav-item">
                  <Link href="about">
                    <a className="nav-link">
                      <span className="	fa fa-book icon" />About
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link">
                      <span className="	fa fa-book icon" />Blog
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">
                      <span className="	fa fa-book icon" />Innovations
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">
                      <span className="	fa fa-book icon" />Crowd Funding
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link">
                      <span className="	fa fa-book icon" />Contact
                    </a>
                  </Link>
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ settings: state.settings });
const mapDispatchToProps = (dispatch) => ({
  updateHeader: (props) => dispatch(updateHeader(props)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
