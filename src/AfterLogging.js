/* global gapi */
import React, {Component, ReactPropTypes as PropTypes} from 'react';
import './App.css';
import './'
import './creative.css';
import './all.css';
import './all';
import './brands.css';
import './brands';
import './fontawesome.css';
import './fontawesome';
import './index.css';
import './magnific-popup.css';
import './regular.css';
import './regular';
import './solid.css';
import './svg-with-js.css';
import './v4-shims.css';
import './v4-shims';
import './solid';
// import './LoginButton'
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import App from "./App";
import {Redirect} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

class AfterLogging extends Component {

    render() {
        return (
            <div className="App">
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>
                    <meta name='google-signin-client_id'
                          content='545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'/>


                    <title>Charytatywni</title>
                    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
                    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet"/>
                    <link
                        href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic'
                        rel='stylesheet' type='text/css'/>
                    <link href="./magnific-popup.css" rel="stylesheet"/>
                    <link href="./creative.min.css" rel="stylesheet"/>


                </head>
                <body id="page-top">

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Charytatywni.pl</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav><div id="map_button"></div></Nav>
                        <Nav><div id="offer_button"></div></Nav>
                        <Nav><div id="my_offer_button"></div></Nav>
                        <Nav>
                            <div id="log_in_out"></div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                                <h1 className="text-uppercase text-white font-weight-bold">Pomóż innym żyć pełnią
                                    życia</h1>
                                <hr className="divider my-4"/>
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 font-weight-light mb-5">Zarejestruj się aby móc dzielić się
                                    z
                                    bliźnimi</p>
                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Dowiedz się
                                    więcej</a>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="page-section bg-primary" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">Mamy wszystko czego potrzebujesz!</h2>
                                <hr className="divider light my-4"/>
                                <p className="text-white-50 mb-4">Nie wiesz co zrobić z niezjedzonym pożywieniem? Masz
                                    potrzebę niesienia pomocy?
                                    Może potrzebujesz pomocy? Dzięki tej stronie spełnisz swoje marzenia</p>
                                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Przyjrzyj się
                                    naszym
                                    działaniom!</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section" id="services">
                    <div className="container">
                        <h2 className="text-center mt-0">Działania</h2>
                        <hr className="divider my-4"/>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-utensils text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Dziel się jedzeniem</h3>
                                    <p className="text-muted mb-0">Nie wyrzucaj jedzenia, oddaj innym</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">On-line i off-line</h3>
                                    <p className="text-muted mb-0">Korzystaj ze strony on-line oraz offline</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">W całej Polsce</h3>
                                    <p className="text-muted mb-0">Pomoc możesz nieść w każdym miejscu w Polsce!</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                                    <h3 className="h4 mb-2">Zbieraj odznaczenia</h3>
                                    <p className="text-muted mb-0">Zbieraj odznaczenia super bohatera</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/jedzenie.jpg">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/jedzenie.jpg" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Żywność
                                        </div>
                                        <div className="project-name">
                                            Podziel się jedzeniem
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/przyjazn.jpg">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/przyjazn.jpg" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Znajomość
                                        </div>
                                        <div className="project-name">
                                            Nawiąż nowe znajomości
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/mapa.png">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/mapa.png" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Mapa
                                        </div>
                                        <div className="project-name">
                                            Zaznacz gdzie chcesz pomagać
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/lupa.png">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/lupa.png" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Pomoc
                                        </div>
                                        <div className="project-name">
                                            Znajdź pomoc dla siebie
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/wiadomosc.png">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/wiadomosc.png" alt=""/>
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Wiadomości
                                        </div>
                                        <div className="project-name">
                                            Rozmawaj ze swoim bliźnim
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/odznaka.png">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/odznaka.png" alt=""/>
                                    <div className="portfolio-box-caption p-3">
                                        <div className="project-category text-white-50">
                                            Nagrody
                                        </div>
                                        <div className="project-name">
                                            Zdobywaj odznaki za pomoc!
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="mt-0">Masz jakieś pytania?</h2>
                                <hr className="divider my-4"/>
                                <p className="text-muted mb-5">Skontaktuj się z nami, a rozwiejemy wszystkie
                                    wątpliwości</p>
                            </div>
                        </div>
                        {/*<div id ='googleComponent' className="g-signin2"></div>*/}
                        <div className="row">
                            <div className="col-lg-4 ml-auto text-center">
                                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                                <div>+48 784 140 958</div>
                            </div>
                            <div className="col-lg-4 mr-auto text-center">
                                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                                <a className="d-block" href="mailto:contact@yourwebsite.com">charytatywni@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="bg-light py-5">
                    <div className="container">
                        <div className="small text-center text-muted">Copyright &copy; 2019 - Start Bootstrap oraz super
                            programistka frontu Ewa Łyko
                        </div>
                    </div>
                </footer>

                </body>
            </div>
        );
    }
    componentDidMount()
    {

        onLoad();
        //getUserID();
        displayLogOut();
        displayMap();
        displayOffer();
        displayMyOffers();
    }



}


function onLoad() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });
}


function signOut() {
    // gapi.auth2.init({
    //     client_id: '545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'
    // });
    // setter
    localStorage.removeItem('isLogged');
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then( function () {
        window.open("/", "_self");
    }
    );

}

function goToMap() {
    window.open("/map","_self");
}

function goToAddOffer() {
    window.open("/additem","_self");
}

function goToMyOffers() {
    window.open("/myOffers","_self");
}

function displayLogOut()
{
    ReactDOM.render(
        <div><Nav.Link id="logOutId" onClick={signOut}>Wyloguj się</Nav.Link></div>, document.getElementById("log_in_out")
    )
    ;
}

function displayMap()
{
    ReactDOM.render(
        <div><Nav.Link id="mapId" onClick={goToMap}>Mapa</Nav.Link></div>, document.getElementById("map_button")
    )
    ;
}
function displayOffer()
{
    ReactDOM.render(
        <div><Nav.Link id="offerId" onClick={goToAddOffer}>Dodaj ofertę</Nav.Link></div>, document.getElementById("offer_button")
    )
    ;
}
function displayMyOffers()
{
    ReactDOM.render(
        <div><Nav.Link id="myOfferId" onClick={goToMyOffers}>Moje oferty</Nav.Link></div>, document.getElementById("my_offer_button")
    )
    ;
}
export default AfterLogging;
