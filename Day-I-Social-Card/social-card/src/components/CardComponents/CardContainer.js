import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className="container-card">
        <a className="link" target="__blank" href="https://www.reactjs.org">
        <CardBanner />
        <CardContent />
        </a>
        </div>
    )
}

export default CardContainer;