/* global gapi */
import React, { Component } from 'react';
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

import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import {AppContext} from './App';
import { Redirect } from 'react-router-dom'
import {Nav, Navbar} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import back1 from './img/back4.jpg';
import Spinner from 'react-spinner-material';


const axios = require('axios')
class UserOffers extends Component {

    state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        redirect: false,
        countItems: 0,
        isFood: false,
        isToy: false,
        all: true,
        isFurniture: false,
        isClothes: false,
        isSport: false,
        isRtv: false,
        loading:true,
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    setFood = () => {
        this.setState({
            isFood: true,
            all: false,
            isToy: false,
            isSport: false,
            isFurniture: false,
            isClothes: false,
            isRtv: false
        })
        window.document.getElementById("food").className ="active";
        window.document.getElementById("all").className ="";
        window.document.getElementById("toy").className ="";
        window.document.getElementById("sport").className ="";
        window.document.getElementById("clothes").className ="";
        window.document.getElementById("rtv").className ="";
        window.document.getElementById("furniture").className ="";

    }
    setAll = () => {
        this.setState({
            isFood: false,
            all: true,
            isToy: false,
            isSport: false,
            isFurniture: false,
            isClothes: false,
            isRtv: false
        })
        window.document.getElementById("food").className ="";
        window.document.getElementById("all").className ="active";
        window.document.getElementById("toy").className ="";
        window.document.getElementById("sport").className ="";
        window.document.getElementById("clothes").className ="";
        window.document.getElementById("rtv").className ="";
        window.document.getElementById("furniture").className ="";
    }
    setToy = () => {
        this.setState({
            isFood: false,
            all: false,
            isToy: true,
            isSport: false,
            isFurniture: false,
            isClothes: false,
            isRtv: false
        })
        window.document.getElementById("food").className ="";
        window.document.getElementById("all").className ="";
        window.document.getElementById("toy").className ="active";
        window.document.getElementById("sport").className ="";
        window.document.getElementById("clothes").className ="";
        window.document.getElementById("rtv").className ="";
        window.document.getElementById("furniture").className ="";
    }
    setSport = () => {
        this.setState({
            isFood: false,
            all: false,
            isToy: false,
            isSport: true,
            isFurniture: false,
            isClothes: false,
            isRtv: false
        })
        window.document.getElementById("food").className ="";
        window.document.getElementById("all").className ="";
        window.document.getElementById("toy").className ="";
        window.document.getElementById("sport").className ="active";
        window.document.getElementById("clothes").className ="";
        window.document.getElementById("rtv").className ="";
        window.document.getElementById("furniture").className ="";
    }
    setFurniture = () => {
        this.setState({
            isFood: false,
            all: false,
            isToy: false,
            isSport: false,
            isFurniture: true,
            isClothes: false,
            isRtv: false
        })
        window.document.getElementById("food").className ="";
        window.document.getElementById("all").className ="";
        window.document.getElementById("toy").className ="";
        window.document.getElementById("sport").className ="";
        window.document.getElementById("clothes").className ="";
        window.document.getElementById("rtv").className ="";
        window.document.getElementById("furniture").className ="active";
    }
    setClothes = () => {
        this.setState({
            isFood: false,
            all: false,
            isToy: false,
            isSport: false,
            isFurniture: false,
            isClothes: true,
            isRtv: false
        })
        window.document.getElementById("food").className ="";
        window.document.getElementById("all").className ="";
        window.document.getElementById("toy").className ="";
        window.document.getElementById("sport").className ="";
        window.document.getElementById("clothes").className ="active";
        window.document.getElementById("rtv").className ="";
        window.document.getElementById("furniture").className ="";
    }
    setRtv= () => {
        this.setState({
            isFood: false,
            all: false,
            isToy: false,
            isSport: false,
            isFurniture: false,
            isClothes: false,
            isRtv: true
        })
        window.document.getElementById("food").className ="";
        window.document.getElementById("all").className ="";
        window.document.getElementById("toy").className ="";
        window.document.getElementById("sport").className ="";
        window.document.getElementById("clothes").className ="";
        window.document.getElementById("rtv").className ="active";
        window.document.getElementById("furniture").className ="";
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/confirm'/>
        }
    }

    setRedirectRegister = () => {
        this.setState({
            redirectReg: true
        })
    }

    renderRedirectRegister = () => {
        if (this.state.redirectReg) {
            return <Redirect to='/register'/>
        }
    }

    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 100000);
            this.setState({ intervalIsSet: interval });
        }
        onLoad();
        displayLogOut();
        displayMap();
        displayOffer();
        displayMyOffers();
        displayAllOffers();
    }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    // getDataFromDb = () => {
    //
    //     fetch("https://backendzpipwr.herokuapp.com/userOffers", {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             id: localStorage.getItem('idUser'),
    //         }),
    //     }).then(data => data.json())
    //         .then(res => {console.log(res); this.setState({ data: res })});
    // };
    //
    //
    // renderTableData() {
    //     function getCatById(categoryNum) {
    //         return categoryNum==1 ? "Zabawki" : categoryNum ==2 ? "Jedzenie" : "Inne";
    //     }
    //
    //     function getStatusByID(status) {
    //         return status==1 ? "Otwarta" : status ==2 ? "Zarezerwowana" : "Zamknięta";
    //     }
    //
    //     return this.state.data.map((offer, index) => {
    //         const { offerid, name, description, categoryNum, status } = offer //destructuring
    //         var cat = getCatById(categoryNum);
    //         var statusTrans = getStatusByID(status);
    //         this.state.countItems++;
    //         return (
    //             <tr key={offerid}>
    //                 <td>{this.state.countItems}</td>
    //                 <td>{name}</td>
    //                 <td>{description}</td>
    //                 <td>{cat}</td>
    //                 <td>{statusTrans}</td>
    //                 <td><Nav.Link onClick={() => goToSingleOffer(offerid)}>Edycja i podgląd</Nav.Link></td>
    //             </tr>
    //         )
    //     })
    // }

    getDataFromDb = () => {

        fetch("https://backendzpipwr.herokuapp.com/userOffers", {
        //fetch("http://localhost:8083/userOffers", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: localStorage.getItem('idUser'),
            }),
        }).then(data => data.json())
            .then(res => {console.log(res); this.setState({ data: res,  loading: false })});
    };


    renderTableData() {
        function getCatById(categoryNum) {
            return categoryNum===1 ? "Zabawki" : categoryNum ===2 ? "Jedzenie" : "Inne";
        }

        function getStatusByID(status) {
            return status===1 ? "Otwarta" : status ===2 ? "Zarezerwowana" : "Zamknięta";
        }

        function getPhoto(url) {
            return url===null? "http://res.cloudinary.com/daiq9mb50/image/upload/v1558020887/demo/m39s5w1s5vhuzh18dtfx.png" : url;
        }

        return this.state.data.map((offer, index) => {
            const { offerid, name, description, categoryNum, status, url } = offer

            var cat = getCatById(categoryNum);
            var statusTrans = getStatusByID(status);
            var photo = getPhoto(url);
            this.state.countItems++;
            return (
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={photo} height="260" width="42"
                             alt=""/>
                        <div className="card-body">
                            <h4 className="card-title">
                                <Nav.Link style={{paddingLeft:0}} onClick={() => goToSingleOffer(offerid)}>{name}</Nav.Link>
                                {/*<a href="#">{name}</a>*/}
                            </h4>
                            <h5>{cat}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        {/*<div className="card-footer">*/}
                        {/*<small*/}
                        {/*className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>*/}
                        {/*</div>*/}
                    </div>
                </div>





            )
        })
    }

    renderTableData1() {
        if(this.state.loading)
        {
            return(

                <div id="spinnerMy">
                    <Spinner size={200} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
                </div>

            )
        }
        function getCatById(categoryNum) {
            return categoryNum===1 ? "Jedzenie" : categoryNum ===2 ? "Zabawki" : categoryNum==3 ? "RTV/AGD" : categoryNum==4 ? "Ubrania" : categoryNum==5 ? "Sport" : categoryNum==6 ? "Meble" :"Inne";
        }

        function getStatusByID(status) {
            return status===1 ? "Otwarta" : status ===2 ? "Zarezerwowana" : "Zamknięta";
        }

        function getPhoto(url) {
            return url===null? "http://res.cloudinary.com/daiq9mb50/image/upload/v1558020887/demo/m39s5w1s5vhuzh18dtfx.png" : url;
        }

        function renderByCategory(categoryNum, status, url, offerid, name, description)
        {
            var cat = getCatById(categoryNum);
            var statusTrans = getStatusByID(status);
            var photo = getPhoto(url);
            return (
                <div className="col-md-4 p-t-30">
                    <div className="blo1 myStyleOffer">
                        <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                            <a href="#"><img src={photo} width="350px" height="250px" alt="IMG-INTRO"/></a>
                        </div>

                        <div className="wrap-text-blo1 p-t-35">
                            <h4 className="txt5 color0-hov trans-0-4 m-b-13"> <Nav.Link style={{paddingLeft:0}} onClick={() => goToSingleOffer(offerid)}>{name}</Nav.Link></h4>


                            <p ><b className="cathegoryStyle">Kategoria: {cat}</b></p>
                            <p className="m-b-20">
                                {description}
                            </p>


                        </div>
                    </div>
                </div>
            )
        }

        return this.state.data.map((offer, index) => {
            const { offerid, name, description, categoryNum, status, url } = offer

            if(this.state.isFood)
            {
                if(categoryNum===1)
                {
                    return renderByCategory(categoryNum,status,url,offerid,name, description);
                }

            }
            else if(this.state.all)
            {
                return renderByCategory(categoryNum,status,url,offerid,name, description);
            }
            else if(this.state.isToy)
            {
                if(categoryNum===2)
                {
                    return renderByCategory(categoryNum,status,url,offerid,name, description);
                }

            }
            else if(this.state.isRtv)
            {
                if(categoryNum===3)
                {
                    return renderByCategory(categoryNum,status,url,offerid,name, description);
                }

            }
            else if(this.state.isClothes)
            {
                if(categoryNum===4)
                {
                    return renderByCategory(categoryNum,status,url,offerid,name, description);
                }

            }
            else if(this.state.isSport)
            {
                if(categoryNum===5)
                {
                    return renderByCategory(categoryNum,status,url,offerid,name, description);
                }

            }
            else if(this.state.isFurniture)
            {
                if(categoryNum===6)
                {
                    return renderByCategory(categoryNum,status,url,offerid,name, description);
                }

            }

        })
    }

    render() {
        // return (
        //     <div className="LoginButton">
        //         <head>
        //             <meta charSet="utf-8"/>
        //             <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        //             <meta name="description" content=""/>
        //             <meta name="author" content=""/>
        //             <meta name='google-signin-client_id'
        //                   content='545384910825-14gu3jrktnjfcjrntbv4t3akclpk2hn2.apps.googleusercontent.com'/>
        //             <title>Charytatywni</title>
        //             <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet"
        //                   type="text/css"/>
        //             <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
        //                   rel="stylesheet"/>
        //             <link
        //                 href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic'
        //                 rel='stylesheet' type='text/css'/>
        //             <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet"/>
        //
        //             <link href="css/creative.min.css" rel="stylesheet"/>
        //             <link href="cssForLogin.css" rel="stylesheet"/>
        //
        //         </head>
        //         <body id="page-top">
        //
        //         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //             <Navbar.Brand href="/">Charytatywni.pl</Navbar.Brand>
        //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //             <Navbar.Collapse id="responsive-navbar-nav">
        //                 <Nav className="mr-auto"></Nav>
        //                 <Nav className="mr-auto"></Nav>
        //                 <Nav><div id="map_button"></div></Nav>
        //                 <Nav><div id="offer_button"></div></Nav>
        //                 <Nav><div id="my_offer_button"></div></Nav>
        //                 <Nav>
        //                     <div id="log_in_out"></div>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Navbar>
        //
        //         <header className="masthead">
        //             <div id = "marginTopStylId" className="container_login">
        //                 {/*<div className="container_login" style="margin-top: 10%">*/}
        //                 <div className="row_loginMy">
        //                     {/*<div>*/}
        //                     <div className="col-md-9 col-lg-8 mx-auto myHeader">
        //                         {this.state.data.length <= 0 ? <p>Brak ofert lub poczekaj chwilę na załadowanie</p> :
        //
        //                         <Table striped bordered hover variant="dark" tableCaption="Plain text header" >
        //                             <caption>Moje oferty</caption>
        //                             <thead>
        //                             <tr>
        //                                 <th>Numer</th>
        //                                 <th>Nazwa</th>
        //                                 <th>Opis</th>
        //                                 <th>Kategoria</th>
        //                                 <th>Status</th>
        //                                 <th>Przejrzyj szczegóły</th>
        //                             </tr>
        //                             </thead>
        //
        //                             <tbody>
        //                             {this.renderTableData()}
        //                             </tbody>
        //                         </Table>}
        //                     </div>
        //                 </div>
        //             </div>
        //         </header>
        //
        //         <footer className="bg-light py-5My">
        //             <div className="container">
        //                 <div className="small text-center text-muted">Copyright &copy; 2019 - Start Bootstrap oraz super
        //                     programistka frontu Ewa Łyko
        //                 </div>
        //             </div>
        //         </footer>
        //         </body>
        //     </div>
        //
        // );

        return (

            <div className="LoginButton">


                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>
                    <title>Shop Homepage - Start Bootstrap Template</title>
                    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                    <link href="css/shop-homepage.css" rel="stylesheet"/>

                </head>

                <body>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">CharityChain.pl</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav className="mr-auto"></Nav>
                        <Nav><div id="map_button"></div></Nav>
                        <Nav><div id="all_offer_button"></div></Nav>
                        <Nav><div id="offer_button"></div></Nav>
                        <Nav><div id="my_offer_button"></div></Nav>
                        <Nav>
                            <div id="log_in_out"></div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <section className="section-intro">
                    <div className="isotope_fillter">
                        <ul className="gallery_filter list">
                            <li data-filter="*" className="active" id="all"><a href="#" onClick={this.setAll}>Wszystkie</a></li>
                            <li data-filter=".brand" id="food"><a href="#" onClick={this.setFood}>Jedzenie</a></li>
                            <li data-filter=".manipul" id="toy"><a href="#" onClick={this.setToy}>Zabawki</a></li>
                            <li data-filter=".manipul" id="clothes"><a href="#" onClick={this.setClothes}>Ubrania</a></li>
                            <li data-filter=".manipul" id="sport"><a href="#" onClick={this.setSport}>Sport</a></li>
                            <li data-filter=".manipul" id="rtv"><a href="#" onClick={this.setRtv}>RTV/AGD</a></li>
                            <li data-filter=".manipul" id="furniture"><a href="#" onClick={this.setFurniture}>Meble</a></li>
                        </ul>
                    </div>

                    <div className="content-intro bg-white p-t-77 p-b-133">
                        <div className="container">
                            <div className="row">

                                {this.renderTableData1()}





                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-light py-5My">

                        <div className="small text-center text-muted">Copyright &copy; 2019 - Horak & Łyko & Rychter & Sinicki

                    </div>
                </footer>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                </body>
            </div>

        );


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
    localStorage.removeItem('idUser');
    /*var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then( function () {
            window.open("/", "_self");
        }
    );*/
    window.open("/", "_self");

}

function goToSingleOffer(offerId) {
    window.open("/offer?id="+offerId,"_self");
}


function goToMap() {
    window.open("/map","_self");
}

function goToMyOffers() {
    window.open("/myOffers","_self");
}

function goToAllOffers() {
    window.open("/all","_self");
}

function goToAddOffer() {
    window.open("/additem","_self");
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
function displayAllOffers()
{
    ReactDOM.render(
        <div><Nav.Link id="allOfferId" onClick={goToAllOffers}>Wszystkie oferty</Nav.Link></div>, document.getElementById("all_offer_button")
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
UserOffers.contextType = AppContext;
export default UserOffers;


