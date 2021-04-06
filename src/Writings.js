import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import './Writings.css'

function Writings() {

    const displayPost = () => {
        let post = document.querySelector('.writings__content')
        post.classList.toggle('show')
    }


    return (
        <Fragment>
            <nav>

                <div className="nav__name">
                    <h2 className="lastname">𝑀𝒶𝓎𝑜𝓌𝒶</h2>
                    <h2 className="surname">𝓐𝔀𝓸𝔂𝓸𝓶𝓲</h2>
                </div>

                <div className="nav__link">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                </div>


            </nav>


            <div className="writings" >
                <div className="writings__title" onClick={displayPost}>
                    <h2>Challenges i Faced While Building My Website</h2>
                    <span>5-4-2021</span>
                </div>
                <div className="writings__content" hidden >
                    <p>
                        i love writing......., i guess i will ahve to use firebase to store my data

                    </p>
                </div>


            </div>

        </Fragment>
    )
}

export default Writings
