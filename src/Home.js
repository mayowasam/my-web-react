import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            welcome home
            <Link to="/content">content</Link>

        </div>
    )
}

export default Home
