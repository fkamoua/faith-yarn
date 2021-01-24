import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';

import hero from './images/hero_cropped.jpg'
import iahwehyireh from './images/iahwehyireh_cropped.jpg'
import aurevoir from './images/aurevoir_cropped.jpg'
import milano from './images/milano_cropped.jpg'
import jacket from './images/jacket_cropped.jpg'
import top from './images/tops.jpg'
import bottom from './images/bottoms.jpg'
import social01 from './images/social01.png'
import social02 from './images/social02.png'

SwiperCore.use([Navigation, Pagination]);

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
                <span className="nav__menu material-icons">
                    menu
                </span>
                <h2 className="nav__logo">faith & yarn</h2>
                <ul className="nav__list">
                    <li className="nav__link">new arrivals</li>
                    <li className="nav__link">tops</li>
                    <li className="nav__link">bottoms</li>
                </ul>
                <Bag/>
            </nav>
        );
    }
}


class Bag extends React.Component {
    constructor() {
        super();
        this.state = {
            display: false,
            bagContent: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            display: !state.display
        }));
    }

    render() {
        let isToggleOn = this.state.display ? 'show' : 'hide';
        let isToggleOpposite = this.state.display? 'hide' : 'show';
        let displayEmptyMsg = this.state.bagContent.length ? 'hide' : 'show';

        let bagTransition = this.state.display ? 'bag__content--transition' : '';
        
        return (
            <>
                <a className={`nav__bag ${isToggleOpposite}`} href="#bag" onClick={this.handleClick}>
                    <div className="material-icons">
                        shopping_bag
                    </div>
                </a>

                <div className="bag" className={isToggleOn}>
                    <div className="bag__container">
                        <div className={`bag__content ${bagTransition}`}>
                            <div className="bag__header">
                                <a className="bag__close material-icons" onClick={this.handleClick} href="#">
                                    close
                                </a>
                                <div className="bag__logo">faith & yarn</div>
                            </div>
                            <div className={`bag__empty ${displayEmptyMsg}`}>
                                <p className="bag__empty-msg">
                                    your cart is empty
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <main className="content">
                <Hero/>
                <Bestsellers images={this.props.images}/>
                <div className="clothes">
                    <Tops/>
                    <Bottoms/>
                </div>
                <Social/>
            </main>
        );
    }
} 

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <img className="hero__img" src={hero} alt="new arrivals"/>
                <div className="hero__content-container">
                    <h1 className="hero__heading">new arrivals</h1>
                    <div className="hero__link-container">
                        <a className="hero__button" href="#">shop now</a>
                    </div>
                </div>
                
                <a className="hero__link" href="#hero"></a>
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
                    <div className="swiper__slide">
                        <div className="swiper__img-container">
                            <img className="swiper__img" src={this.props.images[i].src} alt={this.props.images[i].name} key={i}/>
                        </div>
                        <div className="swiper__product-details">
                            <h2 className="swiper__product-name">{this.props.images[i].name}</h2>
                            <div className="swiper__product-price">{this.props.images[i].price}</div>
                        </div>
                    </div>
                    <a className="swiper__link" href="#bestseller"></a>
                </SwiperSlide>
            )
        }
        return (
            <div className="bestsellers">
                <div className="swiper">
                    <Swiper 
                    slidesPerView={3}
                    navigation
                    pagination={{clickable: true}}
                    spaceBetween={10}

                    id="bestsellers" images={this.props.images}> 
                        {slides}
                    </Swiper>
                </div>
                <a className="bestsellers__button" href="#"> shop bestsellers</a>
            </div>
        )
    }
}

class Tops extends React.Component {
    render() {
        return (
            <div className="tops">
                <img className="tops__img" src={top}/>
                <div className="tops__content-container">   
                    <h2 className="tops__header">tops</h2>
                </div>
                <a className="tops__link" href="#tops"></a>
            </div>
        );
    }
}

class Bottoms extends React.Component {
    render() {
        return (
            <div className="bottoms">
                <img className="bottoms__img" src={bottom}/>
                <div className="bottoms__content-container">
                    <h2 className="bottoms__header">bottoms</h2>
                </div>
                <a className="bottoms__link" href="#bottoms"></a>
            </div>
        );
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
                <div className="footer__flex-container">
                    <div className="footer__block">
                        <ul className="footer__section">
                            <li className="footer__section-header">company</li>
                            <li className="footer__section-links">
                                <a className="footer__section-link">about</a>
                                <a className="footer__section-link">careers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__block">
                        <ul className="footer__section"> 
                            <li className="footer__section-header">help</li>
                            <li className="footer__section-links">
                                <a className="footer__section-link">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__block">
                        <ul className="footer__section"> 
                            <li className="footer__section-header">store</li>
                            <li className="footer__section-links">
                                <a className="footer__section-link">find a store</a>
                                <a className="footer__section-link">shop online</a>
                            </li>
                        </ul>
                    </div>
                </div>
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
    {src: jacket, name: 'denim jacket', price: '$60'}
];

export default App;