import Logo from './images/logo.PNG';
import FizzBuzzCode from './images/fizzbuzzcapture.PNG';
import SafecrackerCode from './images/safecapturesnippet.PNG';
import LawDayRunImage from './images/ldrSiteImage.jpg';
import LootFondlingImage from './images/lootFondling.PNG'
import Safecracker from './projects/safecracker.zip'
import FizzBuzz from './projects/fizzbuzz.zip'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function PortfolioHomePage() {
    return (
        <>
            <header className="header">
                <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="navbar">
                    <div className="container"><a className="navbar-brand" href="#!"><img className="navbar-logo" src={Logo}
                        alt="logo" width="45" /></a>
                        <button className="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <HashLink to='#hero'>
                                        <a className="nav-link text-uppercase">Home<span className="sr-only">(current)</span></a>
                                    </HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink to='#about'>
                                        <a className="nav-link text-uppercase">About</a>
                                    </HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink to='#resume'>
                                        <a className="nav-link text-uppercase">Resume</a>
                                    </HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink to='#coursework'>
                                        <a className="nav-link text-uppercase">Coursework</a>
                                    </HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink to='#projects'>
                                        <a className="nav-link text-uppercase">Projects</a>
                                    </HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink to='#contact'>
                                        <a className="nav-link text-uppercase">Contact</a>
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="hero bg-cover bg-center py-5" id="hero">
                <div className="container py-5 my-5 z-index-20 position-relative">
                    <div className="row py-lg-5 mt-5">
                        <div className="col-md-8 text-white">
                            <h2 className="h4 text-primary text-shadow fw-normal mb-0">Hello, my name is</h2>
                            <h1 className="text-uppercase text-shadow text-xl mb-0">Trey <span className="text-primary">Poynter</span></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light" id="about">
                <div className="container py-5">
                    <header className="mb-5">
                        <p className="fw-bold text-primary text-uppercase letter-spacing-3">Who even am I</p>
                        <h2 className="text-uppercase lined">About Me</h2>
                    </header>
                    <p className="lead text-muted fs-3">Hey all Trey here</p>
                    <p className="text-muted">Say, do you want someone who is quick to think on his feet to fix a problem, has a decent
                        sense of humor and personality to boot might I recommend myself. I grew up in a rural farming community off the
                        borders of Richland, MO and enjoy a bunch of different hobbies like cooking, exercise, tinkering, and I enjoy
                        the occasional video game. If my friends and teachers were to describe me it would most likely be "the funny
                        kind sarcastic".</p>
                </div>
            </section>
            <section className="py-5" id="expertise">
                <div className="container py-5" id="resume">
                    <header className="mb-5 pb-4">
                        <p className="fw-bold text-primary text-uppercase letter-spacing-3">Everyone's Local IT Guy</p>
                        <h2 className="text-uppercase lined">Resume</h2>
                    </header>
                    <div className="row gy-5">
                        <div className="col-md-6">
                            <h3 className="h4"><span className="text-primary me-2">01</span>Problem Solving</h3>
                            <p className="text-muted text-sm ms-4 ps-3">If I see an issue I will work hard at figuring it out and won't stop
                                until I get something I'm satisfied with. With my amazing problem solving skills I will do just that in a
                                viable amount of time.</p>
                        </div>
                        <div className="col-md-6">
                            <h3 className="h4"><span className="text-primary me-2">02</span>Extensive Tech Knowledge</h3>
                            <p className="text-muted text-sm ms-4 ps-3">Had an interest for technology since I was roughly around 8 years old
                                when my family got a Dell PC with Windows 7 installed. Since then I wanted to learn more on what I can do
                                with computers mainly. Since I grew up in a "farming community" if someone had an issue with their PC or
                                anything of the kind they frequently asked me.</p>
                        </div>
                        <div className="col-md-6">
                            <h3 className="h4"><span className="text-primary me-2">03</span>Backend Development</h3>
                            <p className="text-muted text-sm ms-4 ps-3">I have basic experience with Python, my main language is C#. I have 1
                                year of experience of using the language even getting the <a target="_blank" rel="noreferrer"
                                    href="https://www.credly.com/badges/e07b0d07-eb5c-4da9-a6ff-547a337032f5/public_url">MTA: Software
                                    Development Fundamentals - Certified
                                    2022</a> and competed in SkillsUSA 2022 for Software Development.</p>
                        </div>
                        <div className="col-md-6">
                            <h3 className="h4"><span className="text-primary me-2">04</span>Web Development</h3>
                            <p className="text-muted text-sm ms-4 ps-3">I have intermediate knowledge in HTML and CSS, being taught it while
                                at Ranken made several "lab projects" of using the language.</p>
                        </div>
                    </div>
                </div>
                <div className="container py-5" id="education">
                    <ul className="timeline">
                        <li className="timeline-item ms-3 pb-4">
                            <div className="timeline-arrow"></div>
                            <div className="row gx-0 gy-4">
                                <div className="col-lg-5">
                                    <p className="fw-bold mb-2 text-primary text-sm">2008 - 2022 </p>
                                    <h2 className="h5 mb-0 text-uppercase">Elementary - Highschool</h2>
                                    <p className="text-sm mb-0">Richland R-IV Schools</p><span className="small text-muted">Richland, MO</span>
                                </div>
                                <div className="col-lg-7">
                                    <p className="text-muted">While being at Richland I had a good reputation with everyone and being labeled as
                                        "Unofficial IT Guy" by the teachers and friends since the hired one was mainly over at the elementary,
                                        and I graduated with a 3.5 GPA</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item ms-3 pb-4">
                            <div className="timeline-arrow"></div>
                            <div className="row gx-0 gy-4">
                                <div className="col-lg-5">
                                    <p className="fw-bold mb-2 text-primary text-sm">Aug 2021 - May 2022 </p>
                                    <h2 className="h5 mb-0 text-uppercase">Computer Information Technology</h2>
                                    <p className="text-sm mb-0">Waynesville Career Center</p><span className="small text-muted">Waynesville, MO</span>
                                </div>
                                <div className="col-lg-7">
                                    <p className="text-muted">Signed up for WCCs CIT course where the instructor taught us C# and got us prepared
                                        to take our certification test, while being there I was one of the "better" students so towards the end of
                                        the year I got the "Outstanding Senior Award" and got into the "National Technical Honors Society" and
                                        she asked me and 2 other people if we wanted to intern with her to "revise" her curriculum.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item ms-3 pb-4">
                            <div className="timeline-arrow"></div>
                            <div className="row gx-0 gy-4">
                                <div className="col-lg-5">
                                    <p className="fw-bold mb-2 text-primary text-sm">2022 - 2024 </p>
                                    <h2 className="h5 mb-0 text-uppercase">Computer Programming</h2>
                                    <p className="text-sm mb-0">Ranken Technical College</p><span className="small text-muted">St. Louis, MO</span>
                                </div>
                                <div className="col-lg-7">
                                    <p className="text-muted">Coming Soon</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="py-5 bg-light" id="coursework">
                <div className="container py-5">
                    <header className="mb-5 pb-4">
                        <p className="fw-bold text-primary text-uppercase letter-spacing-3">What I did at Ranken</p>
                        <h2 className="text-uppercase lined">Coursework</h2>
                    </header>
                    <div className="row">
                        <div className="col-md-6 mt-1">
                            <div className="cardItem">
                                <img src={LawDayRunImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Law Day Run Site</h5>
                                    <NavLink to='/lawDayRun/home'>
                                        <a href="#!" target="blank" rel="noreferrer" className="btn btn-primary">Click Me to Visit</a>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-1">
                            <div className="cardItem">
                            <img src={LootFondlingImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Loot Fondling - Semester 1</h5>
                                    <NavLink to='/lootFondling'>
                                        <a href='#!' className="btn btn-primary">Click Me to Visit</a>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-1">
                            <div className="cardItem">
                                <div className="card-body">
                                    <h5 className="card-title">In Development</h5>
                                    <a href="#coursework" className="btn btn-primary">Soon&trade;</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-1">
                            <div className="cardItem">
                                <div className="card-body">
                                    <h5 className="card-title">In Development</h5>
                                    <a href="#coursework" className="btn btn-primary">Soon&trade;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light" id="projects">
                <div className="container py-5">
                    <header className="mb-5 pb-4">
                        <p className="fw-bold text-primary text-uppercase letter-spacing-3">Yes. I have Experience</p>
                        <h2 className="text-uppercase lined">Projects</h2>
                    </header>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="cardItem">
                                <img src={FizzBuzzCode} className="card-img-top cards" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">C# - FizzBuzz</h5>
                                    <p className="card-text">My solution to FizzBuzz.</p>
                                    <a href={FizzBuzz} download="Fizzbuzz" className="btn btn-primary">Download</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cardItem">
                                <img src={SafecrackerCode} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">C# - SafeCracker</h5>
                                    <p className="card-text">Pick length of code and see how many attempts it takes you.</p>
                                    <a href={Safecracker} download="Safecracker" className="btn btn-primary">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light py-5" id="contact">
                <div className="container py-5">
                    <header className="mb-5 pb-4">
                        <p className="fw-bold text-primary text-uppercase letter-spacing-3"></p>
                        <h2 className="text-uppercase lined">Contact</h2>
                    </header>
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6"><a className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
                            href="#!"><i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                            <h4 className="contact-item-title h5 text-uppercase">Location</h4>
                            <p className="text-sm mb-0">St. Louis, Missouri</p>
                        </a></div>
                        <div className="col-lg-4 col-md-6"><a className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
                            href="tel:5734339964"><i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                            <h4 className="contact-item-title h5 text-uppercase">Phone</h4>
                            <p className="text-sm mb-0">573&nbsp;433&nbsp;9964</p>
                        </a></div>
                        <div className="col-lg-4 col-md-6"><a className="px-4 py-5 text-center contact-item shadow-sm reset-anchor d-block"
                            href="https://form.jotform.com/222703362855153" target="_blank" rel="noreferrer"><i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                            <h4 className="contact-item-title h5 text-uppercase">Email</h4>
                            <p className="text-sm mb-0">treypoynter@gmail.com</p>
                        </a></div>
                    </div>
                </div>
            </section>
            <footer className="pt-5">
                <div className="container text-center py-5">
                    <div className="row px-4">
                        <div className="col-lg-7 mx-auto">
                            <h2 className="text-uppercase mb-0">Trey Poynter</h2>
                            <p className="text-muted my-4 mb-0">“Engage people with what they expect; it is what they are able to discern and
                                confirms their projections. It settles them into predictable patterns of response, occupying their minds
                                while you wait for the extraordinary moment — that which they cannot anticipate.”</p>
                            <h6 className="text-muted mt-0 mb-4">-Sun Tzu, The Art of War</h6>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a target="_blank" rel="noreferrer" className="social-link"
                                    href="https://www.facebook.com/trey.poynter"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" rel="noreferrer" className="social-link"
                                    href="https://www.linkedin.com/in/trey-poynter-98893424a/"><i className="fab fa-linkedin-in"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" rel="noreferrer" className="social-link" href="https://github.com/TreyPoynter"><i
                                    className="fab fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyrights px-4">
                    <div className="container py-4 border-top text-center">
                    </div>
                </div>
            </footer>
        </>
    );
}

export default PortfolioHomePage;