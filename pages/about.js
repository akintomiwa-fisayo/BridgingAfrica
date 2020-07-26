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
              <h1>About Bridging Afika</h1>
            </div>
          </div>
          <div className="page-container">
            <div className="about-info">
              <h1 className="title">Our Mission</h1>
              <div className="info">
                <span className="fa fa-quote-left left icon" />
                Nostrud ad aute nulla nulla. Ad dolor exercitation incididunt et pariatur magna. Irure laborum et enim aliquip proident. Elit deserunt ipsum amet ut consectetur occaecat et anim consequat mollit. Nulla culpa elit tempor ut reprehenderit cillum esse. Proident proident reprehenderit commodo laborum esse.

                Ad pariatur anim minim pariatur fugiat eiusmod ullamco consectetur pariatur sint aute in minim. Sunt enim anim reprehenderit labore ipsum irure. Exercitation nulla adipisicing do aliquip. Occaecat magna proident nostrud enim adipisicing veniam ad dolor non aute et quis labore. Labore enim aliqua consequat laborum esse fugiat ad culpa aliquip qui laboris exercitation amet nisi.
                <span className="fa fa-quote-right right icon" />
              </div>
            </div>

            <div className="about-info">
              <h1 className="title">Our Vision</h1>
              <div className="info">
                <span className="fa fa-quote-right left icon" />
                Nostrud ad aute nulla nulla. Ad dolor exercitation incididunt et pariatur magna. Irure laborum et enim aliquip proident. Elit deserunt ipsum amet ut consectetur occaecat et anim consequat mollit. Nulla culpa elit tempor ut reprehenderit cillum esse. Proident proident reprehenderit commodo laborum esse.

                Ad pariatur anim minim pariatur fugiat eiusmod ullamco consectetur pariatur sint aute in minim. Sunt enim anim reprehenderit labore ipsum irure. Exercitation nulla adipisicing do aliquip. Occaecat magna proident nostrud enim adipisicing veniam ad dolor non aute et quis labore. Labore enim aliqua consequat laborum esse fugiat ad culpa aliquip qui laboris exercitation amet nisi.
                <span className="fa fa-quote-right right icon" />
              </div>
            </div>
          </div>
          <div className="our-team">
            <h1>Our Team</h1>
            <div className="the-team">
              <div className="person">
                <div className="avi">
                  <img src="/img/avatars/female-1.jpg" alt="" />
                </div>
                <h4 className="title">FirstName lastName</h4>
                <h5 className="position">Position</h5>
              </div>

              <div className="person">
                <div className="avi">
                  <img src="/img/avatars/female-1.jpg" alt="" />
                </div>
                <h4 className="title">FirstName lastName</h4>
                <h5 className="position">Position</h5>
              </div>

              <div className="person">
                <div className="avi">
                  <img src="/img/avatars/female-1.jpg" alt="" />
                </div>
                <h4 className="title">FirstName lastName</h4>
                <h5 className="position">Position</h5>
              </div>

              <div className="person">
                <div className="avi">
                  <img src="/img/avatars/female-1.jpg" alt="" />
                </div>
                <h4 className="title">FirstName lastName</h4>
                <h5 className="position">Position</h5>
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
