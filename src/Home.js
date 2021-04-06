import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {

    

    return (
        <div className="container">

        <nav>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/projects">Projects</Link></div>
            <div><Link to="/writings">Writings</Link></div>
        </nav>

        <div className="content">
            <div className="content__name">
                <h1 className="lastname">𝑀𝒶𝓎𝑜𝓌𝒶</h1>
                <h1 className="surname">𝓐𝔀𝓸𝔂𝓸𝓶𝓲</h1>
            </div>
            <div className="content__description">
                <h1>Web user interface and design systems engineering.</h1>
                <p>I help companies and organizations build modern, resilient, and inclusive Web user interfaces and
                    design systems, with Link strong focus on responsive design, performance, and accessibility.
                </p>

            </div>
        </div>


    </div>
    )
}

export default Home
