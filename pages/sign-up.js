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
        <div id="signUpPage" style={{ paddingTop: `${header.height}px` }}>
          <div className="container">
            <section className="left">
              <Link href="/index">
                <a>
                  <span className="fa fa-long-arrow-left" />
                </a>
              </Link>
              <img src="/img/sign-up.jpg" alt="sign up" />
            </section>
            <section className="right">

              {/* <div id="accountType">
                <div className="account-type">
                  <img src="/img/handshake.png" alt="" className="icon" />
                  <p className="title">individual</p>
                </div>

                <div className="account-type">
                  <img src="/img/company.png" alt="" className="icon" />
                  <p className="title">corporation</p>
                </div>
              </div>
 */}
              <div className="forms" data-form={state.formType}>
                <div className="form">
                  <div className="top">
                    <h1>Register</h1>
                    <p>
                      Already have an account?
                      <Link href="#">

                        <a onClick={(e) => { this.onChangeFormType(e, 'logIn'); }}> Login </a>
                      </Link>

                    </p>
                  </div>

                  <FormInput
                    label="First Name"
                    value={firstName}
                    onChange={(value) => {
                      this.setState({ firstName: value });
                    }}
                  />
                  <FormInput
                    label="Last Name"
                    value={lastName}
                    onChange={(value) => {
                      this.setState({ lastName: value });
                    }}
                  />
                  <FormInput
                    label="Email"
                    value={email}
                    onChange={(value) => {
                      this.setState({ email: value });
                    }}
                  />
                  <FormInput
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(value) => {
                      this.setState({ password: value });
                    }}
                  />
                  <FormInput
                    type="password"
                    label="Re-type Password"
                    value={password2}
                    onChange={(value) => {
                      this.setState({ password2: value });
                    }}
                  />

                  <div id="agreement">
                    <input type="checkBox" />
                    <span>you need to agree to our <Link href="/"><a>Terms and conditions</a></Link></span>
                  </div>

                  <button id="signUpBtn" className="btn btn-success form-action">
                    SIGN UP
                  </button>
                </div>

                <div className="form">
                  <div className="top">
                    <h1>Log In</h1>
                    <p>
                      Don't have an account?
                      <Link href="#">

                        <a onClick={(e) => { this.onChangeFormType(e, 'signUp'); }}> Sign up </a>
                      </Link>

                    </p>
                  </div>

                  <FormInput
                    label="Email"
                    value={state.loginEmail}
                    onChange={(value) => {
                      this.setState({ loginEmail: value });
                    }}
                  />
                  <FormInput
                    label="Password"
                    type="password"
                    value={state.loginPassword}
                    onChange={(value) => {
                      this.setState({ loginPassword: value });
                    }}
                  />

                  <button className="btn btn-success form-action">
                    Log In
                  </button>
                </div>

              </div>
            </section>
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
