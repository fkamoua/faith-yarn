import React from 'react'

import hero from './images/hero.jpg'
import iahwehyireh from './images/iahwehyireh.jpg'
import aurevoir from './images/aurevoir.jpg'


function App() {
    return (
        <div>
            <Navbar/>
            <Main images={IMAGES}/>
        </div>
        
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
                <Hero images={this.props.images}/>
                <Carousel images={this.props.images}/>
            </main>
        );
    }
} 

class Hero extends React.Component {
    render() {
        let heroImgSrc;
        for (let i = 0; i < this.props.images.length; i++) {
            if (this.props.images[i].name === 'hero') {
                heroImgSrc = this.props.images[i].src;
            }
        }
        return (
            <div className="hero">
                <img className="hero__img" src={heroImgSrc} alt="hero-img"></img>
            </div>
        );
    }
}


class Carousel extends React.Component {
    render() {
        let imgSrc = []
        for (let i = 0; i < this.props.images.length; i++) {
            if (this.props.images[i].name === 'bestseller') {
                imgSrc.push(<img className="bestsellers__img" src={this.props.images[i].src} alt={this.props.images[i].name} key={i}/>);
            }
        }
        return (
            <div>
                {imgSrc}
            </div>
        );
    }
}

const IMAGES = [
    {name: 'hero', src: hero},
    {name: 'bestseller', src: iahwehyireh},
    {name: 'bestseller', src: aurevoir}
];

export default App;