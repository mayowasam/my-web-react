import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import Thanos from './images/thanos.jpg'
import Bus from './images/bus.jpg'

import './About.css'



function About() {

    const history = useHistory()
    const goHome = () =>{
        history.push('/')
        }
    return (
        <div className="container">
            <nav>

                <div className="nav__name" onClick={goHome}>
                    <h2 className="lastname">𝑀𝒶𝓎𝑜𝓌𝒶</h2>
                    <h2 className="surname">𝓐𝔀𝓸𝔂𝓸𝓶𝓲</h2>
                </div>

                <div className="nav__link">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/writings">Writings</Link>
                </div>


            </nav>


            <div className="content">

                <div className="content__header">
                    <div className="image">
                        <img src={Thanos} alt="" />
                    </div>

                    <div className="description">
                        <h2>Hi, I’m Mayowa.</h2>
                        <p>I’m a frontend engineer, based in Nigeria.
                        I love the Web platform and I want to make it better for everyone. And I consider myself to be
                        completely blessed that I get to build it for a living.

                        I have a Bachelor’s Degree in Civil Enginnering;
                        but everything I know of and on the Web today is self-taught.
                        I’m grateful that I ended up in a field where one of the major requirements for staying relevant
                        is to continuously keep learning.</p>
                    </div>

                </div>



                <div className="content__top">

                    <div className="content__topheader">
                        <div className="content__topone">
                        <h2> Skills</h2>
                            <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Git</li>
                            </ul>
                            
                        </div>

                        <div className="content__toptwo">
                            <h2>what i build</h2>

                                <p>
                                    I write HTML, CSS, SVG, and presentational JavaScript that powers Web user interfaces. With a focus on responsive design, semantic markup, accessibility, and performance, I build resilient, inclusive foundations for user interfaces, marrying cutting-edge techniques with foundational Web standards.                            
                                </p>
                            
                            </div>

                    </div>

                </div>



                <div className="content__middle">
                    <p>
                        " Mayowa possesses a near-boundless curiosity, a peerless intellect, and some of the best communication
                        skills . He’s also one of the finest, friendliest people I’ve ever met.
                        I’m constantly awed at his ability to make even the most tangled specification more approachable to
                        the rest of us. What’s more, it’s rare to find someone who cares equally deeply about accessibility
                        and cutting-edge code; thankfully, Mayowa’s able to marry the two in everything he does, and artfully
                        so.
                    
                        Our industry is better for Mayowa’s work, his voice, and his passion. I’m proud to consider him a colleague and friend, and would leap at the chance to collaborate with her on
                        a project."— Eyo-Okon Eyo(a real G)
                    </p>


                    <div className="content__middletrivia">

                        <div className="trivia">
                            <h2>Some trivia about me:</h2>
                            <ul>
                                <li>
                                    I love dogs. i believe they are the purest being in the whole world, kind caring and loyal.
                                </li>

                                <li>
                                    I love watching football and my favorite team is Arsenal.
                                </li>

                                <li>
                                    I am also a very good fifa play
                                </li>
                            </ul>

                        </div>

                        <div className="trivia__image">
                            <img src={Bus} alt="" />
                        </div>
                    </div>


                </div>
            

            </div>

        <footer>
            <div className="contact">
                <h2>Connect;</h2>
                <p>Location:<span>Ibadan, Nigeria</span></p>
                <p>Email:<span>mayowaawoyomi@gmail.com </span></p>
                <a href="http://github.com/MayowaSam">GitHub</a>
                <a href="http://twitter.com/@mynameismayowa">Twitter</a>
                <a href="http://www.linkedin.com/in/@mayowaSam">LinkedIn</a> 
            </div>
        </footer>


        </div>

           
    )
}

export default About
