import React from 'react'
import { Link } from 'react-router-dom'

export default function landing() {
    return (
        <section className="landing">
            <div className="dart-overlay">
                <div className="landing-inner">
                    <h1 className="large">Payment Project</h1>
                    <p className="lead">
                        create a team oroject/portofolio, share post and get help from
                        other developers
                    </p>
                    <div className="buttons">
                        <Link to="/transfer" className="btn btn-primary">Transfer</Link>
                        <Link to="/Dashboard" className="btn btn-light">Dashboard</Link>
                    </div>
                </div>
            </div>
                                
        </section>
    )
}
