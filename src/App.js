import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';

import hero from './images/hero.jpg'
import heroMobile from './images/heroMobile.png'
import iahwehyireh from './images/iahwehyireh_cropped.jpg'
import aurevoir from './images/aurevoir_cropped.jpg'
import milano from './images/milano_cropped.jpg'
import spotlight from './images/spotlight.jpg'
import social01 from './images/social01.png'
import social02 from './images/social02.png'

function App() {
    return (
        <>
            <Navbar/>
            <Main images={BESTSELLERS}/>
            <Footer/>
        </>
    );
}

class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav">
                <h2 className="nav__logo">faith & yarn</h2>
                <span className="nav__menu material-icons">
                    menu
                </span>
                <ul className="nav__list">
                    <li className="nav__link">new arrivals</li>
                    <li className="nav__link">tops</li>
                    <li className="nav__link">bottoms</li>
                </ul>
                <span className="nav__bag material-icons">
                    shopping_bag
                </span>
            </nav>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <main className="content">
                <Hero/>
                <Bestsellers images={this.props.images}/>
                <Spotlight/>
                <Social/>
            </main>
        );
    }
} 

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="hero__img-container">
                    <div className="hero__media-container">
                        <img className="hero__img" src={heroMobile} alt="new arrivals"/>
                    </div>
                    <div className="hero__link-container">
                        <a className="hero__button" href="#">shop now</a>
                    </div>
                </div>
                <div className="hero__secondary-content">
                    <h1 className="hero__heading">new arrivals</h1>
                    <p className="hero_p">shop our new arrivals </p>
                </div>
                
            </div>
        );
    }
}

class Bestsellers extends React.Component {
    render() {

        const slides = [];

        for (let i = 0; i < this.props.images.length; i++) {
            slides.push(
                <SwiperSlide>
                    <div className="swiper__img-container">
                        <img className="swiper__img" src={this.props.images[i].src} alt={this.props.images[i].name} key={i}/>
                    </div>
                     <div className="swiper__product-details">
                        <h2 className="swiper__product-name">{this.props.images[i].name}</h2>
                        <div className="swiper__product-price">{this.props.images[i].price}</div>
                    </div>
                </SwiperSlide>
            )
        }
        return (
            <div className="bestsellers">
                <div className="swiper">
                    <Swiper id="bestsellers" images={this.props.images}> 
                        {slides}
                    </Swiper>
                </div>
                <a className="bestsellers__button" href="#"> shop bestsellers</a>
            </div>
        )
    }
}



class Spotlight extends React.Component {
    render() {
        return (
            <div className="spotlight">
                <img className="spotlight__img" src={spotlight} alt="spotlight img"/>
                <h2 className="spotlight__header">Coco Noir</h2>
                <a className="spotlight__button" href="#">shop</a>
            </div>
        )
    }
}

class Social extends React.Component {
    render() {
        return (
            <div className="social">
                <h2 className="social__header">follow us</h2>
                <div className="social__img-container">
                    <img className="social__img social__img--1" src={social01} alt="instagram"/>
                    <div className="social__links-container social__img--2">
                        <h3 className="social__logo">faith & yarn</h3>
                        <img className="social__img" src={social02} alt="instagram"/>
                        <ul className="social__links">
                            <li className="social__link">
                                <a href="#">#faithyarn</a>
                            </li>
                            <li className="social__link">
                                <a href="#">@faithandyarn_</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Newsletter/>
                <ul className="footer__section">
                    <li className="footer__section-header">company</li>
                    <li className="footer__section-links">
                        <a className="footer__section-link">about</a>
                        <a className="footer__section-link">careers</a>
                    </li>
                </ul>

                <ul className="footer__section"> 
                    <li className="footer__section-header">help</li>
                    <li className="footer__section-links">
                        <a className="footer__section-link">FAQ</a>
                    </li>
                </ul>
            </footer>
        );
    }
}

class Newsletter extends React.Component {
    render() {
        return (
            <form className="newsletter__form">
                <input className="newsletter__email" placeholder="ENTER YOUR EMAIL ADDRESS" type="email"></input>
                <input type="submit" value="Subscribe" className="newsletter__submit"></input>
            </form>
        );
    }
}


const BESTSELLERS = [
    {src: iahwehyireh, name: 'iahweh yireh', price: '$20'},
    {src: aurevoir, name: 'au revoir', price: '$20'},
    {src: milano, name: 'prada milano', price: '$50'},
];

export default App;