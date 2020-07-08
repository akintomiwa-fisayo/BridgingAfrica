import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Header from '../components/general/Header';
import Footer from '../components/general/Footer';
import Layout from '../components/general/Layout';
import FormInput from '../components/general/FormInput';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      submitting: false,
      formType: 'signUp',
    };
  }

  static getInitialProps({ store }) {
    // return store;
  }

  onChangeFormType(e, formType) {
    e.preventDefault();
    this.setState({ formType });
  }

  render() {
    const { props, state } = this;
    const { header } = props.settings;
    const {
      firstName, lastName, email, password, password2,
    } = state;

    return (
      <Layout>
        <div id="aboutPage">
          <div className="banner">
            <img src="/img/innovation-5.jpg" alt="" className="bk" />
            <div className="fk">
              <h1>Contact Us</h1>
            </div>
          </div>
          <div className="container">
            <h1 className="title">We would love to hear from you</h1>
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
              <div className="info">
                <span className="fa fa-instagram icon" />
                <span>https://instagram.com/bridgingAfrika</span>
              </div>
              <div className="info">
                <span className="fa fa-facebook-square icon" />
                <span>https://facebook.com/bridgingAfrika</span>
              </div>
              <div className="info">
                <span className="fa fa-linkedin-square icon" />
                <span>https://linkedin.com/bridgingAfrika</span>
              </div>
              <div className="info">
                <span className="fa fa-twitter-square icon" />
                <span>https://twitter.com/bridgingAfrika</span>
              </div>
            </div>

            <div className="feed-back">
              <h3>GET IN TOUCH</h3>

              <div className="form">
                <div className="input">
                  <label>Email</label>
                  <input />
                </div>
                <div className="input">
                  <label>Message</label>
                  <textarea />
                </div>

                <button type="button" className="btn btn-primary">Submit
                  <span className="icon-paper-plane icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => ({ settings: state.settings });
const mapDispatchToProps = (dispatch) => ({
  // updateHeader: (props) => dispatch(updateHeader(props)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
