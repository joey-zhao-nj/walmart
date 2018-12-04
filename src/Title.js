import React from 'react';

import './title.css';

import envelope from './assets/envelope-solid.svg';
import info from './assets/info-circle-solid.svg';
import link from './assets/link-solid.svg';
import share from './assets/share-square-solid.svg';

class Title extends React.Component {
    render() {
        return <div className="Title">
            <div className="colorBar"></div>
            <div className="titleContainer">
                <div className="titleText">{this.props.title}</div>
                <div className="icons">
                    <img className="icon" src={envelope} alt="message" />
                    <img className="icon" src={link} alt="link" />
                    <img className="icon" src={share} alt="share" />
                    <img className="icon" src={info} alt="info" />
                </div>
            </div>
        </div>
    }
}

export default Title;