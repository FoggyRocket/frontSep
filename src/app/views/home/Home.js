//importamos REact si es necesario 
import React from 'react';
import './styles.css'
import logo from '../../assets/svg/logo.svg'
import {Link}  from 'react-router-dom'
                //react.router-dom
const Home = ({history,location,match}) => (

    <section className="home-container" >
       <div className="img-background">
       </div>
        <div className="title-section">
            <img src={logo} width="30%" />
            <h1 className="title-text">
                DISCOVER THE PROJECTS OF OUR STUDENTS
            </h1>
            <span> Are you an Ironhacker? 
                <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> 
            </span>
        </div> 
    </section>
)


export default Home;