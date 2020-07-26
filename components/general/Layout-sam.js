import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

class LayoutSam extends React.Component {
  render() {
    const { props } = this;
    const { children } = props;
    return (
      <>
        <Head runat="server">
          {/* <!-- Basic Page Needs ================================================== --> */}
          <title>Bridging Afrika</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Ideas that works" />
          <link rel="icon" href="/images/favicon.png" />

          {/* <!-- CSS ================================================== --> */}
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/night-mode.css" />
          <link rel="stylesheet" href="/css/framework.css" />

          {/* <!-- icons ================================================== --> */}
          <link rel="stylesheet" href="/css/icons.css" />

          {/* <!-- Google font ================================================== --> */}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
          {/* <asp:ContentPlaceHolder ID="head" runat="server"> </asp:ContentPlaceHolder> */}

          {/* <!-- javaScripts ================================================== --> */}
          <script src="/js/framework.js" />
          <script src="/js/jquery-3.3.1.min.js" />
          <script src="/js/simplebar.js" />
          <script src="/js/main.js" />
          <script src="/js/nightMode.js" />

        </Head>

        <form id="form1">
          {/* <!-- Wrapper --> */}
          <div id="wrapper">

            {/* <!-- sidebar --> */}
            <div className="main_sidebar">
              <div className="side-overlay" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible" />

              {/* <!-- sidebar header --> */}
              <div className="sidebar-header">
                <h4> Navigation</h4>
                <span className="btn-close" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible" />
              </div>

              {/* <!-- sidebar Menu --> */}
              <div className="sidebar">
                <div className="sidebar_innr" data-simplebar="">

                  <div className="sections">
                    <ul>
                      <li className="active">
                        <a href="Innovations.aspx">
                          <img src="/images/icons/home.png" alt="" />
                          <span> Home </span>
                        </a>
                      </li>
                      <li>
                        <a href="messages.aspx">
                          <img src="/images/icons/chat.png" alt="" />
                          <span>Messages </span>
                        </a>
                      </li>
                      <li>
                        <a href="crowdfunding.aspx">
                          <img src="/images/icons/flag.png" alt="" />
                          <span> Crowdfunding </span>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <img src="/images/icons/group.png" alt="" />
                          <span>Partners </span>
                        </a>
                      </li>

                      <li>
                        <a href="forum.aspx">
                          <img src="/images/icons/info.png" alt="" />
                          <span> Forum Post </span>
                        </a>
                      </li>
                      <li>
                        <a href="blog.aspx">
                          <img src="/images/icons/bag.png" alt="" />
                          <span> Blog </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div id="foot">
                    <ul>
                      <li> <a href="#"> Settings </a></li>
                      <li> <a href="#"> Privacy Policy </a></li>
                      <li> <a href="#"> Terms - Conditions </a></li>
                    </ul>

                    <div className="foot-content">
                      <p>© DateTime.Now.Year <strong>Bridging Afrika</strong>. All Rights Reserved. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- header --> */}
            <div id="main_header">
              <header>
                <div className="header-innr">
                  {/* <!-- Logo--> */}
                  <div className="header-btn-traiger" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible">
                    <span />
                  </div>

                  {/* <!-- Logo--> */}
                  <div id="logo">
                    <a href="#">
                      <img src="/images/bridge_logo.jpeg" alt="" style={{ height: '50px', width: '60px' }} />

                    </a>
                    <a href="#"> </a>
                  </div>

                  {/* <!-- form search--> */}
                  <div className="head_search">

                    <div className="head_search_cont">
                      <input
                        // value=""
                        type="text"
                        className="form-control"
                        placeholder="What are you looking for?"
                        autoComplete="off"
                      />
                      <i className="s_icon uil-search-alt" />
                    </div>

                    {/* <!-- Search box dropdown --> */}
                    <div
                      uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                      className="dropdown-search"
                    >
                      {/* <!-- User menu --> */}

                      <ul className="dropdown-search-list">
                        <li className="list-title"> Recent Searches </li>
                        <li> <a href="#">  Agriculture </a> </li>
                        <li>
                          <a href="#"> Technology </a>
                        </li>
                        <li> <a href="#">  Covid-19 </a> </li>
                        <li> <a href="#"> Education </a> </li>
                        <li className="menu-divider" />
                        <li className="list-footer"> <a href="your-history.html"> Search History </a>
                        </li>
                      </ul>

                    </div>

                  </div>

                  {/* <!-- user icons --> */}
                  <div className="head_user">

                    <a href="timeline.html" className="opts_icon_link uk-visible@s"> Angele Evelyn </a>

                    {/* <!-- Message  notificiation dropdown --> */}
                    <a href="#" className="opts_icon" uk-tooltip="title: Messages ; pos: bottom ;offset:7">
                      <img src="/images/icons/chat.svg" alt="" /> <span>0</span>
                    </a>

                    {/* <!-- Message  notificiation dropdown --> */}
                    {/* <%--    */}
                    <div
                      uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small"
                      className="dropdown-notifications"
                    >

                      {/* <!-- notification contents --> */}
                      <div className="dropdown-notifications-content" data-simplebar="">

                        {/* <!-- notivication header --> */}
                        <div className="dropdown-notifications-headline">
                          <h4>Messages</h4>
                          <a href="#">
                            <i
                              className="icon-feather-settings"
                              uk-tooltip="title: Message settings ; pos: left"
                            />
                          </a>

                          <input type="text" className="uk-input" placeholder="Search in Messages" />
                        </div>

                        {/* <!-- notiviation list --> */}
                        <ul>
                          <li>
                            <a href="#">
                              <span className="notification-avatar status-online">
                                <img src="/images/avatars/avatar-2.jpg" alt="" />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Jonathan Madano</strong>
                                <p>Thanks for The Answer ... <span className="time-ago"> 2 h </span> </p>

                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-3.jpg" alt="" />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Stella Johnson</strong>
                                <p> Alex will explain you how ... <span className="time-ago"> 3 h </span>
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar status-online">
                                <img src="/images/avatars/avatar-1.jpg" alt="" />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Alex Dolgove</strong>
                                <p> Alia just joined Messenger! <span className="time-ago"> 3 h </span> </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar status-online">
                                <img src="/images/avatars/avatar-4.jpg" alt="" />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Adrian Mohani</strong>
                                <p>Thanks for The Answer ... <span className="time-ago"> 2 h </span> </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-2.jpg" alt="" />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Jonathan Madano</strong>
                                <p>Thanks for The Answer ... <span className="time-ago"> 2 h </span> </p>

                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-3.jpg" alt="" />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Stella Johnson</strong>
                                <p> Alex will explain you how ... <span className="time-ago"> 3 h </span>
                                </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-1.jpg" alt="" />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Alex Dolgove</strong>
                                <p> Alia just joined Messenger! <span className="time-ago"> 3 h </span> </p>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-4.jpg" alt="" />
                              </span>
                              <div className="notification-text notification-msg-text">
                                <strong>Adrian Mohani</strong>
                                <p>Thanks for The Answer ... <span className="time-ago"> 2 h </span> </p>
                              </div>
                            </a>
                          </li>
                        </ul>

                      </div>
                      <div className="dropdown-notifications-footer">
                        <a href="#"> See all in Messages</a>
                      </div>

                    </div>
                    {/* --%> */}

                    {/* <!-- notificiation icon  --> */}
                    <a href="#" className="opts_icon" uk-tooltip="title: Notifications ; pos: bottom ;offset:7">
                      <img src="/images/icons/bell.svg" alt="" /> <span>0</span>
                    </a>

                    {/* <!-- notificiation dropdown --> */}
                    {/* <%--    */}
                    <div
                      uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small"
                      className="dropdown-notifications"
                    >

                      {/* <!-- notification contents --> */}
                      <div className="dropdown-notifications-content" data-simplebar="">

                        {/* <!-- notivication header --> */}
                        <div className="dropdown-notifications-headline">
                          <h4>Notifications </h4>
                          <a href="#">
                            <i
                              className="icon-feather-settings"
                              uk-tooltip="title: Notifications settings ; pos: left"
                            />
                          </a>
                        </div>

                        {/* <!-- notiviation list --> */}
                        <ul>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-2.jpg" alt="" />
                              </span>
                              <span className="notification-icon bg-gradient-primary">
                                <i className="icon-feather-thumbs-up" />
                              </span>
                              <span className="notification-text">
                                <strong>Adrian Moh.</strong> Like Your Comment On Video
                                <span className="text-primary">Learn Prototype Faster</span>
                                <br /> <span className="time-ago"> 9 hours ago </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-3.jpg" alt="" />
                              </span>
                              <span className="notification-icon bg-gradient-danger">
                                <i className="icon-feather-star" />
                              </span>
                              <span className="notification-text">
                                <strong>Alex Dolgove</strong> Added New Review In Video
                                <span className="text-primary">Full Stack PHP Developer</span>
                                <br /> <span className="time-ago"> 19 hours ago </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-4.jpg" alt="" />
                              </span>
                              <span className="notification-icon bg-gradient-success">
                                <i className="icon-feather-message-circle" />
                              </span>
                              <span className="notification-text">
                                <strong>Stella John</strong> Replay Your Comment in
                                <span className="text-primary">Adobe XD Tutorial</span>
                                <br /> <span className="time-ago"> 12 hours ago </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-2.jpg" alt="" />
                              </span>
                              <span className="notification-icon bg-gradient-primary">
                                <i className="icon-feather-thumbs-up" />
                              </span>
                              <span className="notification-text">
                                <strong>Adrian Moh.</strong> Like Your Comment On Video
                                <span className="text-primary">Learn Prototype Faster</span>
                                <br /> <span className="time-ago"> 9 hours ago </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-3.jpg" alt="" />
                              </span>
                              <span className="notification-icon bg-gradient-warning">
                                <i className="icon-feather-star" />
                              </span>
                              <span className="notification-text">
                                <strong>Alex Dolgove</strong> Added New Review In Video
                                <span className="text-primary">Full Stack PHP Developer</span>
                                <br /> <span className="time-ago"> 19 hours ago </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="notification-avatar">
                                <img src="/images/avatars/avatar-4.jpg" alt="" />
                              </span>
                              <span className="notification-icon bg-gradient-success">
                                <i className="icon-feather-message-circle" />
                              </span>
                              <span className="notification-text">
                                <strong>Stella John</strong> Replay Your Comment in
                                <span className="text-primary">Adobe XD Tutorial</span>
                                <br /> <span className="time-ago"> 12 hours ago </span>
                              </span>
                            </a>
                          </li>
                        </ul>

                      </div>
                    </div>
                    {/* --%> */}

                    {/* <!-- profile -image --> */}
                    <a className="opts_account" href="#"> <img src="/images/avatars/avatar-5.jpg" alt="" /></a>

                    {/* <!-- profile dropdown--> */}
                    <div
                      uk-dropdown="mode:click ; animation: uk-animation-slide-bottom-small"
                      className="dropdown-notifications rounded-lg"
                    >

                      {/* <!-- User Name / Avatar --> */}
                      <a href="#">

                        <div className="dropdown-user-details">
                          <div className="dropdown-user-avatar">
                            <img src="/images/avatars/avatar-5.jpg" alt="" />
                          </div>
                          <div className="dropdown-user-name"> Angele Evelyn </div>
                        </div>

                      </a>

                      {/* <!-- User menu --> */}

                      <ul className="dropdown-user-menu">
                        <li>
                          <a href="#">
                            <i className="uil-user" /> My Account
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <i className="uil-cog" /> Account Settings
                          </a>
                        </li>

                        <li>
                          <a href="#" style={{ color: '#1a73e8' }}>
                            <i className="uil-bolt" /> Upgrade To Premium
                          </a>
                        </li>

                        <li>
                          <a href="#" id="night-mode" className="btn-night-mode">
                            <i className="uil-moon" /> Night mode
                            <span className="btn-night-mode-switch">
                              <span className="uk-switch-button" />
                            </span>
                          </a>
                        </li>
                        {/* </li> */}
                        <li>
                          <a href="#">
                            <i className="uil-sign-out-alt" />Sign Out
                          </a>
                        </li>
                      </ul>

                    </div>

                  </div>

                </div>
                {/* <!-- / heaader-innr --> */}
              </header>
            </div>
            <div>
              {children}
            </div>
          </div>

        </form>

      </>
    );
  }
}
const mapStateToProps = (state) => ({ settings: state.settings });
const mapDispatchToProps = (dispatch) => ({
  // updateHeader: (props) => dispatch(updateHeader(props)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LayoutSam);
