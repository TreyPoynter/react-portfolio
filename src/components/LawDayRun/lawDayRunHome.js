import { NavLink } from 'react-router-dom';
import LDRLogo from './assets/lawdayrun_stuff/NewLDRLogo.png';
import LincolnLogo from './assets/lawdayrun_stuff/landoflincoln-logo.png';

function LawDayRunHome() {
    return (
        <div>
            <body>
                <header>
                    <div className="header-area header-transparent">
                        <div className="main-header ">
                            <div className="header-bottom  header-sticky  bg-dark">
                                <div className="container-fluid">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap position-relative  bg-dark">
                                        <div className="left-side d-flex align-items-center">
                                            <div className="logo">
                                                <a href="index.html"><img src={LDRLogo} width="100"
                                                    alt="logo" /></a>
                                            </div>
                                            <div className="main-menu d-none d-lg-block">
                                                <nav className="navbar">
                                                    <ul id="navigation menu">
                                                        <li><a className="active" href="index.html">Home</a></li>
                                                        <li><a href="raceinfo.html">Race Info</a>
                                                            <ul className="submenu">
                                                                <li><a target="_blank" rel="noreferrer"
                                                                    href="https://lawday5k.itsyourrace.com/register/">Register</a>
                                                                </li>
                                                                <li><a href="./raceinfo/photos.html">Photos</a></li>
                                                                <li><a href="./raceinfo/maps.html">Maps</a></li>
                                                                <li><a href="https://toolensrunningstart.com/wp-content/uploads/Past_Events_PDF/2022/Law-Day-5K-2022-.pdf">2022 Race Results</a></li>
                                                                <li><a href="http://bellevillerunningclub.com/training/couch-to-5k-training/">Coach to 5k Training</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="contact.html">Contact Us</a></li>
                                                        <li><a href="sponsors.html">Our Sponsors</a></li>
                                                        <li><a href="volunteer.html">Volunteer</a></li>
                                                        <NavLink to='/'>
                                                            <li><a href="volunteer.html">Back to Portfolio</a></li>
                                                        </NavLink>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="header-right-btn f-right  ml-15">
                                            <a href="mailto:EvanGudmestad@gmail.com"
                                                className="header-btn2 d-none d-xxl-inline-block">Email Us :
                                                EvanGudmestad@gmail.com<span></span></a>
                                        </div>
                                        <div className="col-12">
                                            <div className="mobile_menu d-block d-lg-none">
                                                <nav className="navbar">
                                                    <ul className="d-flex align-items-center d-none" id="navigation">
                                                        <li><a className="active" href="index.html">Home</a></li>
                                                        <li><a className="text-light" href="raceinfo.html">Race Info</a>
                                                            <ul>
                                                                <li><a className="text-light" href="./raceinfo/photos.html">Photos</a></li>
                                                                <li><a className="text-light" href="./raceinfo/maps.html">Maps</a></li>
                                                                <li><a className="text-light" target="_blank" rel="noreferrer" href="https://toolensrunningstart.com/wp-content/uploads/Past_Events_PDF/2022/Law-Day-5K-2022-.pdf">2022 Race Results</a></li>
                                                                <li><a className="text-light" target="_blank" rel="noreferrer" href="http://bellevillerunningclub.com/training/couch-to-5k-training/">Coach to 5k Training</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a className="text-light" target="_blank" rel="noreferrer" href="https://lawday5k.itsyourrace.com/register/">Register</a></li>
                                                        <li><a className="text-light" href="contact.html">Contact Us</a></li>
                                                        <li><a className="text-light" href="sponsors.html">Our Sponsors</a></li>
                                                        <li><a className="text-light" href="volunteer.html">Volunteer</a></li>
                                                        <li><a className="text-light" href="volunteer.html">Back to Portfolio</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="slider-area position-relative">
                        <div className="slider-active">
                            <div className="single-slider slider-height slider-bg1 d-flex align-items-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10">
                                            <div className="hero-caption">
                                                <h1 data-animation="fadeInUp" data-delay=".2s" className="hero-header-color">Law Day Run</h1>
                                                <p data-animation="fadeInUp" data-delay=".4s" className="fs-3 hero-text-color hero-info-color fw-bold mb-0">April 30, 2023</p>
                                                <p data-animation="fadeInUp" data-delay=".4s" className="fs-3 hero-text-color hero-info-color fw-bold mt-0 mb-0">Starts at 9:00am</p>
                                                <p data-animation="fadeInUp" data-delay=".4s" className="fs-3 hero-text-color hero-info-color fw-bold mt-0">Belleville, IL</p>
                                                <a href="https://lawday5k.itsyourrace.com/register/" target="_blank" rel="noreferrer" className="btn_1 hero-btn" data-animation="fadeInUp" data-delay=".8s">Register Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="about-area1 section-bg pt-60 pb-60">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-8">
                                    <div className="about-img about-img1  ">
                                        <img src="./assets/lawdayrun_stuff/279171586_401265655184067_412665390812968907_n.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="offset-xl-1 col-xxl-4 col-xl-6 col-lg-6 col-md-9">
                                    <div className="about-caption about-caption1">
                                        <div className="section-tittle mb-25">
                                            <span>Upcoming Event</span>
                                            <h2>2023 Law Day Run</h2>
                                            <p className="mb-30">Whether you are a runner, walker, carriage pusher, or wheel chair racer, you are invited to take on the challenge of the Law Day Run 5K Run/Walk. After the completion of the 5K Run/Walk, enjoy our youth as they traverse either the full 1K Youth Run or "the Little Ones" 300 meter sprint.</p>
                                        </div>
                                        <div className="double-btn d-flex flex-wrap">
                                            <a href="https://lawday5k.itsyourrace.com/register/" target="_blank" rel="noreferrer" className="border-btn">Register</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-area1 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="offset-xl-1 col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                    <div className="about-img about-img1  ">
                                        <img src="./assets/lawdayrun_stuff/5k run2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="offset-xl-1 col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                    <div className="about-caption about-caption1">
                                        <div className="section-tittle m-0">
                                            <span>Helping Communities</span>
                                            <h2>What we are doing</h2>
                                            <p className="mb-30">From its humble 100 person start in 2002, to last years 700 plus participants, the Law Day Run has been and will strive to be a fun way to help a very worthy cause - The Land of Lincoln Legal Assistance Foundation. <br /> The Land of Lincoln Legal Assistance Foundation (LoLLAF) is an organization dedicated to assisting those with low income and in need of civil legal assistance. Handling: housing; family; consumer; public-benefits; health; education; and services for Senior Citizens and disabled persons.</p>
                                            <a href="volunteer.html" className="border-btn">Volunteer Today</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-area1 section-bg section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="offset-xl-1 col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                    <div className="about-caption about-caption1">
                                        <div className="section-tittle m-0">
                                            <span>The Results Are in!</span>
                                            <h2>See Where You Placed in the 2022 Law Day Run</h2>
                                            <a href="https://toolensrunningstart.com/wp-content/uploads/Past_Events_PDF/2022/Law-Day-5K-2022-.pdf"
                                                target="_blank" rel="noreferrer" className="border-btn">2022 Results</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="offset-xl-1 col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                    <div className="about-img about-img1  ">
                                        <img src="./assets/lawdayrun_stuff/279469522_753632769337200_133185106332373554_n.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pt-3 pb-4">
                        <div className="container">
                            <h2 className="display-1 text-center">Photos</h2>
                            <div className="row d-flex justify-content-center">
                                <div className="d-flex justify-content-center col-sm-6 col-md-4 col-lg-3 mt-1">
                                    <div className="card" style={{width: 18 + 'rem'}}>
                                        <a className="card-image"
                                            href="https://tykanoya.smugmug.com/Sports/Law-Day-5k-Run-Belleville/2017-Law-Day-Run/"
                                            target="_blank" rel="noreferrer"><img src="./assets/lawdayrun_stuff/LDR3.jpg" className="card-img-top" alt="..." /></a>
                                        <div className="card-body">
                                            <p className="card-text text-center fs-3">2017 Photos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center col-sm-6 col-md-4 col-lg-3 mt-1">
                                    <div className="card" style={{width: 18 + 'rem'}}>
                                        <a className="card-image"
                                            href="https://tykanoya.smugmug.com/Sports/Law-Day-5k-Run-Belleville/Law-Day-Run-2016/"
                                            target="_blank" rel="noreferrer"><img src="./assets/lawdayrun_stuff/LDR2.jpg" className="card-img-top" alt="..." /></a>
                                        <div className="card-body">
                                            <p className="card-text text-center fs-3">2016 Photos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center col-sm-6 col-md-4 col-lg-3 mt-1">
                                    <div className="card" style={{width: 18 + 'rem'}}>
                                        <a className="card-image"
                                            href="https://tykanoya.smugmug.com/Sports/Law-Day-5k-Run-Belleville/2015-Law-Day-Run/"
                                            target="_blank" rel="noreferrer"><img src="./assets/lawdayrun_stuff/image20.jpg" className="card-img-top"
                                                alt="..." /></a>
                                        <div className="card-body">
                                            <p className="card-text text-center fs-3">2015 Photos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center col-sm-6 col-md-4 col-lg-3 mt-1">
                                    <div className="card" style={{width: 18 + 'rem'}}>
                                        <a className="card-image" href="https://tykanoya.smugmug.com/Sports/Law-Day-5k-Run-Belleville/2014-Law-Day/"
                                            target="_blank" rel="noreferrer"><img src="./assets/lawdayrun_stuff/5k run1.jpg" className="card-img-top"
                                                alt="..." /></a>
                                        <div className="card-body">
                                            <p className="card-text text-center fs-3">2014 Photos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center col-sm-6 col-md-4 col-lg-3 mt-1">
                                    <div className="card" style={{width: 18 + 'rem'}}>
                                        <a className="card-image"
                                            href="https://tykanoya.smugmug.com/Sports/Law-Day-5k-Run-Belleville/2013-Law-Day-Run/"
                                            target="_blank" rel="noreferrer"><img src="./assets/lawdayrun_stuff/IMGP1747.jpg" className="card-img-top"
                                                alt="..." /></a>
                                        <div className="card-body">
                                            <p className="card-text text-center fs-3">2013 Photos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center col-sm-6 col-md-4 col-lg-3 mt-1">
                                    <div className="card" style={{width: 18 + 'rem'}}>
                                        <a className="card-image"
                                            href="https://tykanoya.smugmug.com/Sports/Law-Day-5k-Run-Belleville/2012-Law-Day-Run/"
                                            target="_blank" rel="noreferrer"><img src="./assets/lawdayrun_stuff/IMGP1702.jpg" className="card-img-top"
                                                alt="..." /></a>
                                        <div className="card-body">
                                            <p className="card-text text-center fs-3">2012 Photos</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center col-sm-6 col-md-4 col-lg-3 mt-1">
                                    <div className="card" style={{width: 18 + 'rem'}}>
                                        <a className="card-image" href="https://tykanoya.smugmug.com/Sports/Law-Day-5k-Run-Belleville/2011/"
                                            target="_blank" rel="noreferrer"><img src="./assets/lawdayrun_stuff/IMGP1685.jpg" className="card-img-top"
                                                alt="..." /></a>
                                        <div className="card-body">
                                            <p className="card-text text-center fs-3">2011 Photos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-area1 section-padding section-bg">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="offset-xl-1 col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                    <div className="about-img about-img1  ">
                                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active" data-bs-interval="5000">
                                                    <img src="./assets/lawdayrun_stuff/coachimage1.jpg" height="550" className="d-block w-100" alt="..."/>
                                                </div>
                                                <div className="carousel-item" data-bs-interval="5000">
                                                    <img src="./assets/lawdayrun_stuff/coachimage2.jpg" height="550" className="d-block w-100" alt="..."/>
                                                </div>
                                                <div className="carousel-item" data-bs-interval="5000">
                                                    <img src="./assets/lawdayrun_stuff/coachimage3.jpg" height="550" className="d-block w-100" alt="..."/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="offset-xl-1 col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                                    <div className="about-caption about-caption1">
                                        <div className="section-tittle m-0">
                                            <span>Need Any Extra Training?</span>
                                            <h2>Coach to 5k Training</h2>
                                            <a href="http://bellevillerunningclub.com/training/couch-to-5k-training/"
                                                target="_blank" className="border-btn" rel="noreferrer">Start Training!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="map-are section-padding40">
                        <div className="map">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.869743879827!2d-89.9818258!3d38.5137149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88760292d0ec6823%3A0x96651eb0a902353e!2s123%20E%20Main%20St%2C%20Belleville%2C%20IL%2062220!5e0!3m2!1sen!2sus!4v1666017457467!5m2!1sen!2sus" width="100%" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="footer-wrapper">
                        <div className="footer-area footer-padding bg-dark">
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
                                        <div className="single-footer-caption mb-50">
                                            <div className="single-footer-caption mb-30">
                                                <div className="footer-logo mb-25 d-flex justify-content-around">
                                                    <a href="index.html"><img src={LDRLogo} width="75" alt="LDR Logo" /></a>
                                                    <a href="https://lincolnlegal.org/"><img src={LincolnLogo} width="150" alt="charity logo" /></a>
                                                </div>
                                                <div className="footer-tittle">
                                                    <div className="footer-pera">
                                                        <p>The Land of Lincoln Legal Assistance Foundation (LoLLAF) is an organization dedicated to assisting those with low income and in need of civil legal assistance. Handling: housing; family; consumer; public-benefits; health; education; and services for Senior Citizens and disabled persons</p>
                                                    </div>
                                                </div>
                                                <ul className="footer-social">
                                                    <li><a className="fb" href="https://www.facebook.com/LawDayRun/?ref=page_internal" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                                                    <li><a className="linc" href="https://lincolnlegal.org/" target="_blank" rel="noreferrer"><i className="fa-solid fa-handshake-simple"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                        <div className="single-footer-caption mb-50">
                                            <div className="footer-tittle">
                                                <h4>Navigation</h4>
                                                <ul>
                                                    <li><a className="active" href="index.html">Home</a></li>
                                                    <li><a href="raceinfo.html">Race Info</a></li>
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                    <li><a href="sponsors.html">Our Sponsors</a></li>
                                                    <li><a href="volunteer.html">Volunteer</a></li>
                                                    <li><a href="volunteer.html">Back to Portfolio</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                        <div className="single-footer-caption mb-50">
                                            <div className="footer-tittle">
                                                <h4>Contact Us</h4>
                                                <ul>
                                                    <li><a href="geo:38.51381144100342, -89.98183652883583">123 E.Main St. Belleville IL 62220</a></li>
                                                    <li><a href="mailto:EvanGudmestad@gmail.com">EvanGudmestad@gmail.com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom-area bg-dark">
                            <div className="container">
                                <div className="footer-border">
                                    <div className="row">
                                        <div className="col-xl-12 ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div id="back-top" >
                    <a title="Go to Top" href="#!"><i className="fas fa-long-arrow-alt-up"></i></a>
                </div>

                <script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>
                <script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
                <script src="./assets/js/popper.min.js"></script>
                <script src="./assets/js/bootstrap.min.js"></script>

                <script src="./assets/js/owl.carousel.min.js"></script>
                <script src="./assets/js/slick.min.js"></script>
                <script src="./assets/js/jquery.slicknav.min.js"></script>

                <script src="./assets/js/wow.min.js"></script>
                <script src="./assets/js/jquery.magnific-popup.js"></script>
                <script src="./assets/js/jquery.nice-select.min.js"></script>
                <script src="./assets/js/jquery.counterup.min.js"></script>
                <script src="./assets/js/waypoints.min.js"></script>

                <script src="./assets/js/contact.js"></script>
                <script src="./assets/js/jquery.form.js"></script>
                <script src="./assets/js/jquery.validate.min.js"></script>
                <script src="./assets/js/mail-script.js"></script>
                <script src="./assets/js/jquery.ajaxchimp.min.js"></script>

                <script src="./assets/js/plugins.js"></script>
                <script src="./assets/js/main.js"></script>

                <script src="https://kit.fontawesome.com/58b7281dd9.js" crossOrigin="anonymous"></script>
            </body>
        </div>
    );
}

export default LawDayRunHome;