import React from 'react'

import hero from './images/hero.jpg'
import heroMobile from './images/heroMobile.png'
import iahwehyireh from './images/iahwehyireh.jpg'
import aurevoir from './images/aurevoir.jpg'
import milano from './images/milano.jpg'
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
                <div className="hero__content">
                    <h1 className="hero__heading">new arrivals</h1>
                    <a className="hero__button" href="#">shop now</a>
                </div>
            </div>
        );
    }
}

class Bestsellers extends React.Component {
    render() {
        return (
            <div className="bestsellers">
                <Carousel images={this.props.images}/>
                <a className="bestsellers__button" href="#"> shop bestsellers</a>
            </div>
        )
    }
}

class Carousel extends React.Component {
    render() {
        let products = [];
        for (let i = 0; i < this.props.images.length; i++) {
            products.push( <img className="bestsellers__img" src={this.props.images[i].src} alt={this.props.images[i].name} key={i}/>);
            products.push(<h2 className="bestsellers__product-name">{this.props.images[i].name}</h2>);
            products.push( <div className="bestsellers__product-price">{this.props.images[i].price}</div>);
        }
        return (
            <>
                {products}
            </>
        );
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
                <img className="social__img" src={social01} alt="instagram"/>
                <img className="social__img" src={social02} alt="instagram"/>
                <h3 className="social__logo">faith & yarn</h3>
                <ul className="social__links">
                    <li className="social__link">
                        <a href="#">#faithyarn</a>
                        <a href="#">@faithandyarn_</a>
                    </li>
                </ul>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
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
            <div></div>
        );
    }
}


const BESTSELLERS = [
    {src: iahwehyireh, name: 'iahweh yireh', price: '$20'},
    {src: aurevoir, name: 'au revoir', price: '$20'},
    {src: milano, name: 'prada milano', price: '$50'},
];

export default App;