import React from 'react';
import classes from './header.module.css';
import logo from '../../img/logo.png';
import heru from '../../img/home-heru.jpg';
import Cards from './Cards/Cards';
import Slider from './Slider/Slider';

function Header() {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return (
        <div className="home">
            <div className={classes.header}>
                <div className={classes.time}>
                    <ul>
                        <li>{date}</li>
                        <vl/>
                        <li>{time}</li>
                    </ul>

                </div>
                <div className={classes.logo}>
                    <img src={logo}/>
                </div>
                <div className={classes.Nav}>
                    

                    <ul>
                        <li><a href="#">TODAYS PAPER</a></li>
                        <li><a href="https://medium.com/@pradityadhitama/simple-search-bar-component-functionality-in-react-6589fda3385d">NEWS</a></li>
                        <li><a href="">BUSINESS</a></li>
                        <li><a href="">SPORTS</a></li>
                        <li><a href="">MORE</a></li>
                    </ul>

                </div>
            </div>
            <div className={classes.heru}>
                <img src={heru}/>
                <h2>Avijit’s wife: No justice without<br/> eradicating root of extremism</h2>
                {/* <ul>
                    <li><a><h3>Avijit’s wife: No justice <br/> without eradicating root <br/> of extremism</h3></a></li>
                    <vl/>
                    <li><a><h3>Avijit’s wife: No justice <br/> without eradicating root <br/> of extremism</h3></a></li>
                    <li><a><h3>Avijit’s wife: No justice <br/> without eradicating root <br/> of extremism</h3></a></li>
                    <li><a><h3>Avijit’s wife: No justice <br/> without eradicating root <br/> of extremism</h3></a></li>
                    <li><a><h3>Avijit’s wife: No justice <br/> without eradicating root <br/> of extremism</h3></a></li>
                </ul> */}

            </div>
            <div>
               <Cards/>

            </div>
            <hr/>
            <div>
                <label>Latest News</label>
                <Slider/>
            </div>
            Updates
            <hr/>
            <div>
                <Cards/>
            </div>
            header<br/>
            herosection,<br/>
            news area <br/>
            videos<br/>
            Footer

            
        </div>
    )
}

export default Header
