import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Layout from '../components/general/Layout';
import { getCordinates } from '../lib/custom';
import { updateHeader, updateSocialHeader } from '../redux/settings/action';
import SlideShow from '../components/SlideShow';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.banner = null;
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.onScroll();
    window.addEventListener('scroll', () => { this.onScroll(); });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    this.props.updateHeader({
      fixed: false,
      fixedTop: 0,
    });
  }

  onScroll() {
    console.log('we sha scrolling');
    if (this.banner) {
      const { $ } = window;
      const bannerHeight = $('#banner').height();
      const socialHeaderHeight = $('#socialHeader').outerHeight();
      const headerHeight = this.props.settings.header.height;
      const bannerPositionTop = getCordinates(this.banner).top;
      const socialHeaderPositionTop = getCordinates(this.banner).top;
      console.log(socialHeaderPositionTop, '||', socialHeaderHeight);
      this.props.updateHeader({
        fixed: $('html')[0].scrollTop < socialHeaderHeight,
        fixedTop: socialHeaderHeight,
      });
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
            <img src="img/heros/5W9IHRVEb5.jpg" alt="Background" className="bk" />
            <section className="pb-0">
              <div className="content">
                <div id="spinner" />

                <div id="innovationWeb">
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
                <SlideShow
                  items={[
                    {
                      label: 'Technology',
                      content: <img
                        src="img/innovation-1.jpg"
                        alt="martfury"
                      />,
                    },
                    {
                      label: 'Education',
                      content: <img
                        src="img/innovation-2.jpg"
                        alt="martfury"
                      />,
                    },
                    {
                      label: 'Health',
                      content: <img
                        src="img/innovation-3.jpg"
                        alt="martfury"
                      />,
                    },
                    {
                      label: 'Agriculture',
                      content: <img
                        src="img/innovation-4.jpg"
                        alt="martfury"
                      />,
                    },
                  ]}
                />
                {/* <div className="nav-list">
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
              */}
              </div>
            </section>
          </div>

          <section className="single-center">
            <h2 className="section-title bolder">Our Mission </h2>
            <p>
              Bridging Afrika est une plateforme d’innovation en ligne dont l’objectif principal est la résolution des problèmes africains grâce à des innovations créées par des africains pour des africains.

            </p>

            <p>
              Nous voulons faciliter la résolution de crises en créant un espace où toutes les innovations, solutions de ces crises, sont référencées et mises en avant.
            </p>

            <p>
              En promouvant ces innovations, nous créerons avec les innovateurs une communauté prête à être déployée quelque soit le challenge.

            </p>
          </section>

          <section className="double-sides">
            <div className="text">
              <h2 className="section-title bolder">Bridging Africa's Présentation </h2>
              <p>
                Bridging Afrika est une plateforme d’innovation en ligne dont l’objectif principal est la résolution des problèmes africains grâce à des innovations créées par des africains pour des africains.

              </p>

              <p>
                Nous voulons faciliter la résolution de crises en créant un espace où toutes les innovations, solutions de ces crises, sont référencées et mises en avant.
              </p>

              <p>
                En promouvant ces innovations, nous créerons avec les innovateurs une communauté prête à être déployée quelque soit le challenge.

              </p>
              <div className="text-center">
                <button type="button" className="btn btn-info">En savoir plus</button>
              </div>
            </div>
            <div className="media">
              <img src="img/square-2.jpg" className="img-fluid rounded shadow" alt="j" />
            </div>
          </section>

          <div id="partners">
            <div className="content">
              <h3>Our Partners</h3>
              <div className="rocker">
                <div className="partners">
                  <Link href="/">
                    <a className="fa fa-amazon partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-adn partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-android partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-apple partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-adn partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-apple partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-amazon partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-adn partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-android partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-apple partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-adn partner" />
                  </Link>

                  <Link href="/">
                    <a className="fa fa-apple partner" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section id="extraSection">
            <div className="row">
              <div id="blogs" className="col-md-12 ">
                <h2 className="display-5 title">Latest Articles</h2>
                <div className="row content">
                  <div className="blog-post col-lg-3">
                    <div className="card h-100 hover-box-shadow">
                      <div className="d-block bg-gradient rounded-top position-relative">
                        <img
                          className="card-img-top hover-fade-out"
                          src="img/blog/1.jpg"
                          alt="accompanying Treva testimonial"
                        />

                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Comment s’organise la riposte contre le Covid-19 au Cameroun ?</h5>
                        <p className="card-info">
                          Face au défi du coronavirus, le Cameroun a mis en place un système de détection qui obéit à une procédure conforme aux orientations proposées par l’Organisation mondiale de la santé (OMS).
                        </p>
                        <a href="#" className="stretched-link">Read Story</a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post col-lg-3">
                    <div className="card h-100 hover-box-shadow">
                      <div className="d-block bg-gradient rounded-top position-relative">
                        <img
                          className="card-img-top hover-fade-out"
                          src="img/blog/2.jpg"
                          alt="accompanying Treva testimonial"
                        />

                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Accès prioritaire au vaccin chinois contre la Covid-19 pour l’Afrique ?</h5>
                        <p className="card-info">
                          (Agence Ecofin) - Bientôt l’épilogue ? Point de départ de la maladie à Coronavirus 2019 et ancien épicentre de la pandémie, la Chine peut aujourd’hui se targuer d’avoir acquis une certaine expérience pour ce qui est de la gestion de cette crise. Mieux, selon Ding Yifang, conseiller auprès du gouvernement, un vaccin sera bientôt produit en masse.
                        </p>
                        <a href="#" className="stretched-link">Read Story</a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post col-lg-3">
                    <div className="card h-100 hover-box-shadow">
                      <div className="d-block bg-gradient rounded-top position-relative">
                        <img
                          className="card-img-top hover-fade-out"
                          src="img/blog/4.webp"
                          alt="accompanying Treva testimonial"
                        />

                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Covid-19 : nette accélération de la pandémie en Afrique, avertit l'OMS</h5>
                        <p className="card-info">
                          La vitesse à laquelle le nombre de cas confirmés de Covid-19 a doublé — moins de 20 jours — montre l'accélération de la propagation du nouveau coronavirus en Afrique, a averti, jeudi 11 juin, l'Organisation mondiale de Santé (OMS).
                        </p>
                        <a href="#" className="stretched-link">Read Story</a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-post col-lg-3">
                    <div className="card h-100 hover-box-shadow">
                      <div className="d-block bg-gradient rounded-top position-relative">
                        <img
                          className="card-img-top hover-fade-out"
                          src="img/case-studies/thumb-5.jpg"
                          alt="accompanying Treva testimonial"
                        />

                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Covid-19: voici le top 10 Africain des pays les plus touchés</h5>
                        <p className="card-info">
                          Avec plus de 9 420 cas déclarés de covid-19 et 186 morts, l’Afrique du Sud présente le bilan le plus lourd en termes de personnes infectées selon les données de l’Université Johns Hopkins. Le pays de Mandela est suivi de l’Egypte, avec 8 964 cas positifs et à ce jour 514 décès. Le Maroc présente, lui, 6 038 cas pour 188 décès contre 5 558 cas et 494 morts pour l’Algérie.
                        </p>
                        <a href="#" className="stretched-link">Read Story</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="feedback" style={{ display: 'none' }}>
            <h2>Laissez-nous votre adresse e-mail, nous vous recontacterons une fois que le site internet sera fonctionnel </h2>
            <div id="box">
              <input placeholder="Input email" />
              <button type="button" className="btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3">Envoyer</button>
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
